import { SheltersRespDto } from "@/types/donationTypes";

export async function getShelters(): Promise<SheltersRespDto> {
  const res = await fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters");

  if (!res.ok) {
    throw new Error("Failed to fetch shelters");
  }

  return res.json();
}
