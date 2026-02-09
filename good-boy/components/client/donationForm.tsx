"use client";

import { Button, Stack } from "@mui/material";
import ToggleButtons from "./toggleButtons";
import Shelters from "./shelters";
import DonationInput from "./donationInput";
import ToggleAmounts from "./toggleAmounts";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./donationForm.module.css";
import { useDonationStore } from "@/stores/useDonationStore";
import { DonationType } from "@/types/donationTypes";

export default function DonationForm() {
  const selectedDogShelterId = useDonationStore((state) => state.selectedDogShelterId);
  const option = useDonationStore((state) => state.donationOption);
  const router = useRouter();

  return (
    <div className={styles.donation_container}>
      <div className={styles.big_title}>Vyberte si možnosť, ako chcete pomôcť</div>

      <div className={styles.options}>
        <ToggleButtons />
      </div>

      <div className={styles.shelters}>
        <p style={{ fontWeight: "bold" }}>
          <a href="/about"> O projekte</a>
        </p>

        <p style={{ marginTop: "5px" }}>
          <strong>Útulok</strong> <span>(Nepovinné)</span>
        </p>
        <Shelters />
      </div>

      <div className={styles.donation}>
        <p style={{ fontWeight: "bold" }}>Suma, ktorou chcem prispieť</p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <DonationInput />
        </div>

        <div style={{ marginTop: "30px" }}>
          <ToggleAmounts />
        </div>
      </div>

      <div style={{ flexGrow: 1 }}></div>

      <Stack direction="row" justifyContent="space-between" width="100%" sx={{ marginBottom: "20px" }}>
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
          disabled={option === DonationType.DogShelter && selectedDogShelterId === null}
        >
          Pokračovať
        </Button>
      </Stack>
    </div>
  );
}
