"use client";

import { useQuery } from "@tanstack/react-query";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { getShelters } from "@/api/getShelters";

import { useDonationStore } from "@/stores/useDonationStore";
import { useEffect } from "react";
import { DonationType } from "@/types/donationTypes";

export default function Shelters() {
  const option = useDonationStore((state) => state.donationOption);
  const setDogShelters = useDonationStore((state) => state.setDogShelters);

  const selectedDogShelterId = useDonationStore((state) => state.selectedDogShelterId);
  const setSelectedDogShelterId = useDonationStore((state) => state.setSelectedDogShelterId);

  const { data, isLoading, error } = useQuery({
    queryKey: ["shelters"],
    queryFn: getShelters,
  });

  useEffect(() => {
    if (data?.shelters) {
      setDogShelters(data.shelters);
    }
  }, [data?.shelters, setDogShelters]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading shelters</div>;

  const shelters = data ? data.shelters : [];

  const handleChange = (e: SelectChangeEvent<number | "">) => {
    const val = e.target.value === "" ? null : Number(e.target.value);
    setSelectedDogShelterId(val);
  };

  return (
    <FormControl variant="filled" fullWidth>
      {option === DonationType.DogShelter && (
        <InputLabel id="select-filled-label">Vyberte útulok zo zoznamu</InputLabel>
      )}

      <Select
        labelId="select-filled-label"
        label="Vyberte útulok zo zoznamu"
        value={selectedDogShelterId ?? ""}
        onChange={handleChange}
        disabled={option === DonationType.Foundation}
      >
        <MenuItem value="" disabled>
          Vyberte útulok zo zoznamu
        </MenuItem>

        {shelters.map((s) => (
          <MenuItem key={s.id} value={String(s.id)}>
            {s.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
