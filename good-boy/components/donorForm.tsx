"use client";

import { Button, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { z } from "zod";
import { useDonorFormStore } from "@/stores/useDonorFormStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PHONE_PREFIXES } from "@/constants/donorFormConstants";
import type { SelectChangeEvent } from "@mui/material/Select";

const schema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.email("Neplatný email"),
  phoneNumber: z.string().min(3),
});

type FormFields = z.infer<typeof schema>;

export default function DonorForm() {
  const selectedPhonePrefixId = useDonorFormStore((state) => state.selectedPhonePrefixId);
  const setSelectedPhonePrefixId = useDonorFormStore((state) => state.setSelectedPhonePrefixId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues: { email: "abc@gmail.com" }, resolver: zodResolver(schema) });

  const handlePrefixChange = (e: SelectChangeEvent<number | "">) => {
    const val = Number(e.target.value);
    setSelectedPhonePrefixId(val);
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  const getPhonePrefix = (): string => {
    for (let i of PHONE_PREFIXES) {
      if (selectedPhonePrefixId === i.id) {
        return i.code;
      }
    }
    return "";
  };

  return (
    <div>
      <div>
        <TextField
          label="meno"
          variant="filled"
          sx={{
            width: "200px",
          }}
          {...register("name")}
        />
        {errors.name && <div style={{ border: "2px solid red" }}>{errors.name.message}</div>}
        <TextField
          label="priezvisko"
          variant="filled"
          sx={{
            width: "200px",
          }}
          {...register("surname")}
        />
        {errors.surname && <div style={{ border: "2px solid red" }}>{errors.surname.message}</div>}
      </div>

      <div>
        <TextField
          label="E-mailová adresa"
          variant="filled"
          sx={{
            width: "200px",
          }}
          {...register("email")}
        />
        {errors.email && <div style={{ border: "2px solid red" }}>{errors.email.message}</div>}
      </div>

      <div>
        <Select
          labelId="prefix-label"
          label=""
          value={selectedPhonePrefixId}
          onChange={handlePrefixChange}
          displayEmpty
        >
          {PHONE_PREFIXES.map((i) => (
            <MenuItem key={i.id} value={i.id}>
              {i.flag}
            </MenuItem>
          ))}
        </Select>

        <TextField
          label=""
          variant="filled"
          sx={{
            width: "200px",
          }}
          {...register("phoneNumber")}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">{getPhonePrefix()}</InputAdornment>,
            },
          }}
        />
        {errors.phoneNumber && <div style={{ border: "2px solid red" }}>{errors.phoneNumber.message}</div>}

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          klik
        </Button>
      </div>
    </div>
  );
}
