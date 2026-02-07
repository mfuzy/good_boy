export enum DonationType {
  Foundation = "foundation",
  DogShelter = "dog_shelter",
}

export type ShelterDto = {
  id: number;
  name: string;
};

export type ResultDto = {
  contributors: number;
  contribution: number;
};

export type ContributeReqDto = {
  contributors: Contributor[];
  shelterID: number;
  value: number;
};

export type Contributor = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};
