import { DonationType, ShelterDto } from "@/types/donationTypes";
import { create } from "zustand";

type DonationState = {
  donationOption: DonationType;
  setDonationOption: (value: DonationType) => void;

  donationValue: string;
  setDonationValue: (value: string) => void;

  selectedDonationValue: number;
  setSelectedDonationValue: (value: number) => void;

  dogShelters: ShelterDto[];
  setDogShelters: (value: ShelterDto[]) => void;

  selectedDogShelterId: number | null;
  setSelectedDogShelterId: (value: number | null) => void;
};

export const useDonationStore = create<DonationState>((set) => ({
  donationOption: DonationType.Foundation,
  setDonationOption: (value) => set({ donationOption: value }),

  donationValue: "",
  setDonationValue: (value: string) => set({ donationValue: value }),

  selectedDonationValue: 50,
  setSelectedDonationValue: (value: number) => set({ selectedDonationValue: value }),

  dogShelters: [],
  setDogShelters: (value: ShelterDto[]) => set({ dogShelters: value }),

  selectedDogShelterId: null,
  setSelectedDogShelterId: (value: number | null) => set({ selectedDogShelterId: value }),
}));
