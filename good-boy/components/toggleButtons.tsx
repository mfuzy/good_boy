"use client";

import { useDonationStore } from "@/stores/useDonationStore";
import { DonationType } from "@/types/donationTypes";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

export default function ToggleBtns() {
  const option = useDonationStore((state) => state.donationOption);
  const setOption = useDonationStore((state) => state.setDonationOption);
  return (
    <div>
      <ToggleButtonGroup
        exclusive
        value={option}
        onChange={(e, newValue) => {
          if (newValue !== null) setOption(newValue);
        }}
        size="small"
      >
        <ToggleButton value={DonationType.DogShelter}>Prispieť konkrétnemu útulku</ToggleButton>

        <ToggleButton value={DonationType.Foundation}>Prispieť celej nadácii</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
