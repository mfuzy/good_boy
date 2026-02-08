"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

type TProps = {
  prevRoute: string | null;
  nextRoute: string;
};

export default function FooterStepButtons({ prevRoute, nextRoute }: TProps) {
  const router = useRouter();
  return (
    <Stack direction="row" justifyContent="space-between" width="100%">
      <Button
        size="small"
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none" }}
        disabled={!prevRoute}
        onClick={() => {
          if (prevRoute) {
            router.push(prevRoute);
          }
        }}
      >
        Späť
      </Button>
      <Button
        size="small"
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{ textTransform: "none" }}
        onClick={() => {
          router.push(nextRoute);
        }}
      >
        Pokračovať
      </Button>
    </Stack>
  );
}
