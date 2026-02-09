"use client";

import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./confirmation.module.css";

export default function Confirmation() {
  const router = useRouter();

  return (
    <div className={styles.confirmation_container}>
      <div className={styles.big_title}>Potvrdte</div>

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
