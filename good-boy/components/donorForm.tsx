"use client";

import { Button, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { z } from "zod";
import { useDonationStore } from "@/stores/useDonationStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const schema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.email("Neplatný email"),
  phoneNumber: z.string().min(3),
});

type FormFields = z.infer<typeof schema>;

export default function DonorForm() {
  const donationValue = useDonationStore((state) => state.donationValue);
  const setDonationValue = useDonationStore((state) => state.setDonationValue);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ defaultValues: { email: "abc@gmail.com" }, resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

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

        <TextField
          label="priezvisko"
          variant="filled"
          sx={{
            width: "200px",
          }}
          {...register("surname")}
        />
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
        <Select labelId="shelter-label" label="Útulok" value={""} onChange={() => {}} displayEmpty>
          <MenuItem value="">
            <em>Vyberte útulok zo zoznamu</em>
          </MenuItem>
          {/*
        

           {shelters.map((s) => (
          <MenuItem key={s.id} value={String(s.id)}>
            {s.name}
          </MenuItem>
        ))}
        */}
        </Select>

        <TextField
          label=""
          variant="filled"
          sx={{
            width: "200px",
          }}
          {...register("phoneNumber")}
        />

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          klik
        </Button>
      </div>
    </div>
  );
}
