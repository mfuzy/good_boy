"use client";

import { useDonationStore } from "@/stores/useDonationStore";
import { DonationType } from "@/types/donationTypes";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

export default function ToggleButtons() {
  const option = useDonationStore((state) => state.donationOption);
  const setOption = useDonationStore((state) => state.setDonationOption);
  const setSelectedDogShelterId = useDonationStore((state) => state.setSelectedDogShelterId);
  return (
    <div>
      <ToggleButtonGroup
        exclusive
        value={option}
        onChange={(e, newValue) => {
          if (newValue !== null) setOption(newValue);
          if (newValue === DonationType.Foundation) {
            setSelectedDogShelterId(null);
          }
        }}
        size="small"
      >
        <ToggleButton color="primary" value={DonationType.DogShelter} sx={{ width: "324px" }}>
          Prispieť konkrétnemu útulku
        </ToggleButton>

        <ToggleButton value={DonationType.Foundation} sx={{ width: "324px" }}>
          Prispieť celej nadácii
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
