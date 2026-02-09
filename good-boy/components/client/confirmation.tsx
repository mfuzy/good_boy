"use client";

import { Button, Stack, Grid, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./confirmation.module.css";
import { useDonorFormStore } from "@/stores/useDonorFormStore";
import { useDonationStore } from "@/stores/useDonationStore";
import { PHONE_PREFIXES } from "@/constants/donorFormConstants";
import { DonationType } from "@/types/donationTypes";

export default function Confirmation() {
  const router = useRouter();

  const selectedDogShelterId = useDonationStore((state) => state.selectedDogShelterId);
  const dogShelters = useDonationStore((state) => state.dogShelters);
  const option = useDonationStore((state) => state.donationOption);
  const donationValue = useDonationStore((state) => state.donationValue);
  const selectedDonationValue = useDonationStore((state) => state.selectedDonationValue);

  const selectedPhonePrefixId = useDonorFormStore((state) => state.selectedPhonePrefixId);
  const name = useDonorFormStore((state) => state.name);
  const surname = useDonorFormStore((state) => state.surname);
  const email = useDonorFormStore((state) => state.email);
  const phoneNumber = useDonorFormStore((state) => state.phoneNumber);

  const getShelterName = (): string => {
    for (let i of dogShelters) {
      if (selectedDogShelterId === i.id) {
        return i.name;
      }
    }
    return "";
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
    <div className={styles.confirmation_container}>
      <div className={styles.big_title}>Skontrolujte si zadané údaje</div>

      <div className={styles.summary}>
        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Zhrnutie</p>

        <Grid container spacing={1}>
          <Grid size={6}>Forma pomoci</Grid>
          <Grid className={styles.left_column} size={6}>
            {option === DonationType.Foundation
              ? "Finančný príspevok pre celú nadáciu"
              : "Finančný príspevok pre útulok"}
          </Grid>
          <Grid size={6}>Útulok</Grid>
          <Grid className={styles.left_column} size={6}>
            {getShelterName()}
          </Grid>
          <Grid size={6}>Suma príspevku</Grid>
          <Grid className={styles.left_column} size={6}>
            {donationValue} €
          </Grid>

          <Grid size={12}>
            <Divider sx={{ margin: "20px 0" }} />
          </Grid>

          <Grid size={6}>Meno a priezvisko</Grid>
          <Grid className={styles.left_column} size={6}>
            {name} {surname}
          </Grid>
          <Grid size={6}>E-mail</Grid>
          <Grid className={styles.left_column} size={6}>
            {email}
          </Grid>
          <Grid size={6}>Telefónne číslo</Grid>
          <Grid className={styles.left_column} size={6}>
            {getPhonePrefix()} {phoneNumber}
          </Grid>

          <Grid size={12}>
            <Divider sx={{ margin: "20px 0" }} />
          </Grid>
        </Grid>
      </div>

      <Stack direction="row" justifyContent="space-between" width="100%">
        <Button
          size="small"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{ textTransform: "none" }}
          onClick={() => {
            //redirect
            router.push("/step-2");
          }}
        >
          Späť
        </Button>
        <Button
          size="small"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{ textTransform: "none" }}
          onClick={() => {}}
        >
          Odoslať formulár
        </Button>
      </Stack>
    </div>
  );
}
