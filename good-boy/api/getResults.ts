import { ResultDto } from "@/types/donationTypes";

export async function getResults(): Promise<ResultDto> {
  const res = await fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/results");

  if (!res.ok) {
    throw new Error("Failed to fetch results");
  }

  return res.json();
}
