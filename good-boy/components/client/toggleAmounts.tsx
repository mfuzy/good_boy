"use client";

import { DONATION_AMOUNTS } from "@/constants/donationConstants";
import { useDonationStore } from "@/stores/useDonationStore";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ToggleAmounts() {
  const selectedDonationValue = useDonationStore((state) => state.selectedDonationValue);
  const setSelectedDonationValue = useDonationStore((state) => state.setSelectedDonationValue);
  const setDonationValue = useDonationStore((state) => state.setDonationValue);

  return (
    <div>
      <ToggleButtonGroup
        exclusive
        value={selectedDonationValue}
        onChange={(e, newValue) => {
          if (newValue !== null) setSelectedDonationValue(newValue);
          setDonationValue(newValue);
        }}
        size="small"
        sx={{
          gap: 1.5,
        }}
      >
        {DONATION_AMOUNTS.map((i: number) => (
          <ToggleButton
            value={i}
            sx={{
              minWidth: 98,
              px: 2,
              "&:not(.Mui-selected)": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            {i} €
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
