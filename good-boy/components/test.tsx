"use client";

import { useDonationStore } from "@/stores/useDonationStore";
import { useDonorFormStore } from "@/stores/useDonorFormStore";

export default function Test() {
  const name = useDonorFormStore((state) => state.name);
  const selectedDonationValue = useDonationStore((state) => state.selectedDonationValue);

  return (
    <div>
      <h1>TEST</h1>
      <div>meno: {name}</div>
      <div>selected donation value: {selectedDonationValue}</div>
    </div>
  );
}
