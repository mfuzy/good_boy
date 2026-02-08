"use client";

import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useDonationStore } from "@/stores/useDonationStore";

export default function DonorForm() {
  const donationValue = useDonationStore((state) => state.donationValue);
  const setDonationValue = useDonationStore((state) => state.setDonationValue);

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
          onChange={(e) => {
            const val = e.target.value;

            //setDonationValue(val);
          }}
        />

        <TextField
          label="priezvisko"
          value={""}
          variant="filled"
          sx={{
            width: "200px",
          }}
          onChange={(e) => {
            const val = e.target.value;

            //setDonationValue(val);
          }}
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
          onChange={(e) => {
            const val = e.target.value;

            //setDonationValue(val);
          }}
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
          onChange={(e) => {
            const val = e.target.value;

            //setDonationValue(val);
          }}
        />
      </div>
    </div>
  );
}
