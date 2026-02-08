import Image from "next/image";
import DonationInput from "@/components/donationInput";
import Shelters from "@/components/shelters";
import ToggleButtons from "@/components/toggleButtons";
import TopStepper from "@/components/topStepper";
import ToggleAmounts from "@/components/toggleAmounts";
import DonationForm from "@/components/donationForm";

export default function Home() {
  return (
    <div>
      <div></div>
      <TopStepper activeStep={0} />

      <DonationForm />

      <div>
        <Image src="/Dog1.png" alt="Pes" width={600} height={400} priority />
      </div>
    </div>
  );
}
