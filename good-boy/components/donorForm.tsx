"use client";

import { Button, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useDonationStore } from "@/stores/useDonationStore";
import { useForm, SubmitHandler } from "react-hook-form";

type IFormInput = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
};

export default function DonorForm() {
  const donationValue = useDonationStore((state) => state.donationValue);
  const setDonationValue = useDonationStore((state) => state.setDonationValue);

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div>
      <div>
        <TextField
          label="meno"
          value={""}
          variant="filled"
          sx={{
            width: "200px",
          }}
          {...register("name")}
        />

        <TextField
          label="priezvisko"
          value={""}
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
          value={""}
          variant="filled"
          sx={{
            width: "200px",
          }}
          {...register("email")}
        />
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
          value={""}
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
