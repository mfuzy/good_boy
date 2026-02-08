"use client";

import { Button, Stack } from "@mui/material";
import { useDonationStore } from "@/stores/useDonationStore";
import ToggleButtons from "./toggleButtons";
import Shelters from "./shelters";
import DonationInput from "./donationInput";
import ToggleAmounts from "./toggleAmounts";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function DonationForm() {
  const router = useRouter();
  const donationValue = useDonationStore((state) => state.donationValue);
  const setDonationValue = useDonationStore((state) => state.setDonationValue);

  return (
    <div>
      <h1>Vyberte si možnosť, ako chcete pomôcť</h1>

      <div>
        <ToggleButtons />
      </div>

      <div>O projekte</div>

      <div>Útulok (Nepovinné)</div>

      <Shelters />

      <div>Suma, ktorou chcem prispieť</div>
      <DonationInput />

      <ToggleAmounts />

      <Stack direction="row" justifyContent="space-between" width="100%">
        <Button
          size="small"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{ textTransform: "none" }}
          disabled={true}
        >
          Späť
        </Button>
        <Button
          size="small"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{ textTransform: "none" }}
          onClick={() => {
            //redirect
            router.push("/step-2");
          }}
        >
          Pokračovať
        </Button>
      </Stack>
    </div>
  );
}
