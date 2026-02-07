"use client";

import { DONATION_AMOUNTS } from "@/constants/donationConstants";
import { useDonationStore } from "@/stores/useDonationStore";
import { DonationType } from "@/types/donationTypes";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ToggleAmounts() {
  const selectedDonationValue = useDonationStore((state) => state.selectedDonationValue);
  const setSelectedDonationValue = useDonationStore((state) => state.setSelectedDonationValue);

  return (
    <div>
      <ToggleButtonGroup
        exclusive
        value={selectedDonationValue}
        onChange={(e, newValue) => {
          if (newValue !== null) setSelectedDonationValue(newValue);
        }}
        size="small"
      >
        {DONATION_AMOUNTS.map((i: number) => (
          <ToggleButton value={i}>{i} €</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
