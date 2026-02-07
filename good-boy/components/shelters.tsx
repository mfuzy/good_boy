"use client";

import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { getShelters } from "@/api/getShelters";

import { useDonationStore } from "@/stores/useDonationStore";

export default function Shelters() {
  const selectedDogShelterId = useDonationStore((state) => state.selectedDogShelterId);
  const setSelectedDogShelterId = useDonationStore((state) => state.setSelectedDogShelterId);

  const { data, isLoading, error } = useQuery({
    queryKey: ["shelters"],
    queryFn: getShelters,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading shelters</div>;

  const shelters = data ? data.shelters : [];

  const handleChange = (e: SelectChangeEvent<number | "">) => {
    const val = e.target.value === "" ? null : Number(e.target.value);
    setSelectedDogShelterId(val);
  };

  return (
    <FormControl>
      <InputLabel id="shelter-label">Útulok</InputLabel>
      <Select
        labelId="shelter-label"
        label="Útulok"
        value={selectedDogShelterId ?? ""}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value="">
          <em>Vyberte útulok zo zoznamu</em>
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
