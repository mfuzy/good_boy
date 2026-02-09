"use client";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useDonationStore } from "@/stores/useDonationStore";

export default function DonationInput() {
  const donationValue = useDonationStore((state) => state.donationValue);
  const setDonationValue = useDonationStore((state) => state.setDonationValue);

  return (
    <TextField
      value={donationValue}
      variant="standard"
      inputMode="numeric"
      sx={{
        width: "65px",
        "& .MuiInputBase-input": { fontSize: 28, textAlign: "center", color: "#9CA3AF" },
      }}
      onChange={(e) => {
        const val = e.target.value;

        setDonationValue(val);
      }}
      slotProps={{
        input: {
          endAdornment: <InputAdornment position="end">€</InputAdornment>,
        },
      }}
    />
  );
}
