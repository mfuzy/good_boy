import { DONATION_AMOUNTS } from "@/constants/donation";
import { DonationType } from "@/types/donation";
import { create } from "zustand";

type DonationState = {
  donationOption: DonationType;
  setDonationOption: (value: DonationType) => void;

  donationValue: string;
  setDonationValue: (value: string) => void;

  selectedDonationValue: number;
  setSelectedDonationValue: (value: number) => void;

  dogShelters: any;
  setDogShelters: (value: any) => void;

  selectedDogShelter: any;
  setSelectedDogShelter: (value: any) => void;
};

export const useUserStore = create<DonationState>((set) => ({
  donationOption: DonationType.Foundation,
  setDonationOption: (value) => set({ donationOption: value }),

  donationValue: "",
  setDonationValue: (value: string) => set({ donationValue: value }),

  selectedDonationValue: DONATION_AMOUNTS[4],
  setSelectedDonationValue: (value: number) => set({ selectedDonationValue: value }),

  dogShelters: [],
  setDogShelters: (value: any) => set({ dogShelters: value }),

  selectedDogShelter: "",
  setSelectedDogShelter: (value: any) => set({ selectedDogShelter: value }),
}));
