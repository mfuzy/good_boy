"use client";

import { Button, Stack, Grid, Divider, Checkbox, FormControlLabel, LinearProgress, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./confirmation.module.css";
import { useDonorFormStore } from "@/stores/useDonorFormStore";
import { useDonationStore } from "@/stores/useDonationStore";
import { PHONE_PREFIXES } from "@/constants/donorFormConstants";
import { DonationType, ContributeReqDto } from "@/types/donationTypes";
import { useMutation } from "@tanstack/react-query";
import { contribute } from "@/api/contribute";

export default function Confirmation() {
  const router = useRouter();

  const selectedDogShelterId = useDonationStore((state) => state.selectedDogShelterId);
  const dogShelters = useDonationStore((state) => state.dogShelters);
  const option = useDonationStore((state) => state.donationOption);
  const donationValue = useDonationStore((state) => state.donationValue);

  const selectedPhonePrefixId = useDonorFormStore((state) => state.selectedPhonePrefixId);
  const name = useDonorFormStore((state) => state.name);
  const surname = useDonorFormStore((state) => state.surname);
  const email = useDonorFormStore((state) => state.email);
  const phoneNumber = useDonorFormStore((state) => state.phoneNumber);
  const isChecked = useDonorFormStore((state) => state.isChecked);
  const toggleChecked = useDonorFormStore((state) => state.toggleChecked);

  const mutation = useMutation({
    mutationFn: contribute,
  });

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

  const handleChangeCheck = () => {
    toggleChecked();
  };

  const handleSubmit = () => {
    const reqData: ContributeReqDto = {
      contributors: [
        {
          firstName: name,
          lastName: surname,
          email: email,
          phone: phoneNumber,
        },
      ],
      shelterID: selectedDogShelterId ? selectedDogShelterId : 0,
      value: Number(donationValue),
    };

    mutation.mutate(reqData);
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

          {option === DonationType.DogShelter && <Grid size={6}>Útulok</Grid>}
          {option === DonationType.DogShelter && (
            <Grid className={styles.left_column} size={6}>
              {getShelterName()}
            </Grid>
          )}

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

      <div>
        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={handleChangeCheck} />}
          label="Súhlasím so spracovaním mojich osobných údajov"
        />
      </div>

      {mutation.isPending && <LinearProgress color="primary" />}

      {mutation.isError && (
        <Alert variant="filled" severity="error">
          Vyskytla sa chyba: {mutation.error.message}
        </Alert>
      )}
      {mutation.isSuccess && <Alert severity="success">Príspevok bol úspešne zaznamenaný.</Alert>}

      <div style={{ flexGrow: 1 }}></div>

      <Stack direction="row" justifyContent="space-between" width="100%" sx={{ marginBottom: "20px" }}>
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
          onClick={handleSubmit}
          disabled={!isChecked}
        >
          Odoslať formulár
        </Button>
      </Stack>
    </div>
  );
}
