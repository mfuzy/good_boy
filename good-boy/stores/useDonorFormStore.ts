import { create } from "zustand";

type DonorState = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  selectedPhonePrefixId: number;

  isChecked: boolean;

  setName: (value: string) => void;
  setSurname: (value: string) => void;
  setEmail: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setSelectedPhonePrefixId: (value: number) => void;

  toggleChecked: () => void;
};

export const useUserStore = create<DonorState>((set) => ({
  name: "",
  surname: "",
  email: "",
  phoneNumber: "",
  selectedPhonePrefixId: 1,

  isChecked: false,

  setName: (value) => set({ name: value }),
  setSurname: (value) => set({ surname: value }),
  setEmail: (value) => set({ email: value }),
  setPhoneNumber: (value) => set({ phoneNumber: value }),
  setSelectedPhonePrefixId: (value) => set({ selectedPhonePrefixId: value }),

  toggleChecked: () => set((state) => ({ isChecked: !state.isChecked })),
}));
