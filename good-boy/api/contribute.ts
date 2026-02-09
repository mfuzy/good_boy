import { ContributeReqDto, ContributeRespDto } from "@/types/donationTypes";

export async function contribute(reqData: ContributeReqDto): Promise<ContributeRespDto> {
  const res = await fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  });

  if (!res.ok) {
    throw new Error("Failed to post data");
  }

  return res.json();
}
