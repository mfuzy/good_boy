"use client";

import { Button, TextField, Stack, Alert, Select, MenuItem } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { z } from "zod";
import { useDonorFormStore } from "@/stores/useDonorFormStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PHONE_PREFIXES } from "@/constants/donorFormConstants";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const schema = z.object({
  name: z.string().min(2, "Minimálne 2 znaky").max(20, "Maximálne 20 znakov").optional(),
  surname: z.string().min(2, "Minimálne 2 znaky").max(30, "Maximálne 30 znakov"),
  email: z.email("Neplatný email"),
  phoneNumber: z.string().regex(/^\d{9}$/, "Telefónne číslo musí mať 9 číslic"),
});

type FormFields = z.infer<typeof schema>;

export default function DonorForm() {
  const router = useRouter();
  const selectedPhonePrefixId = useDonorFormStore((state) => state.selectedPhonePrefixId);
  const setSelectedPhonePrefixId = useDonorFormStore((state) => state.setSelectedPhonePrefixId);

  const setName = useDonorFormStore((state) => state.setName);
  const setSurname = useDonorFormStore((state) => state.setSurname);
  const setEmail = useDonorFormStore((state) => state.setEmail);
  const setPhoneNumber = useDonorFormStore((state) => state.setPhoneNumber);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues: { email: "abc@gmail.com" }, resolver: zodResolver(schema) });

  const handlePrefixChange = (e: SelectChangeEvent<number | "">) => {
    const val = Number(e.target.value);
    setSelectedPhonePrefixId(val);
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);

    //save data to store
    setName(data.name ? data.name : "");
    setSurname(data.surname);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);

    //redirect
    router.push("/step-3");
  };

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
          size="small"
          sx={{
            width: "200px",
          }}
          {...register("name")}
        />
        {errors.name && <Alert severity="warning">{errors.name.message}</Alert>}
        <TextField
          label="priezvisko"
          variant="filled"
          size="small"
          sx={{
            width: "200px",
          }}
          {...register("surname")}
        />
        {errors.surname && <Alert severity="warning">{errors.surname.message}</Alert>}
      </div>

      <div>
        <TextField
          label="E-mailová adresa"
          variant="filled"
          size="small"
          sx={{
            width: "200px",
          }}
          {...register("email")}
        />
        {errors.email && <Alert severity="warning">{errors.email.message}</Alert>}
      </div>

      <div>
        <Select
          labelId="prefix-label"
          label=""
          size="small"
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
          size="small"
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
        {errors.phoneNumber && <Alert severity="warning">{errors.phoneNumber.message}</Alert>}

        <Stack direction="row" justifyContent="space-between" width="100%">
          <Button
            size="small"
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none" }}
            onClick={() => {
              //redirect
              router.push("/");
            }}
          >
            Späť
          </Button>
          <Button
            size="small"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ textTransform: "none" }}
            onClick={handleSubmit(onSubmit)}
          >
            Pokračovať
          </Button>
        </Stack>
      </div>
    </div>
  );
}
