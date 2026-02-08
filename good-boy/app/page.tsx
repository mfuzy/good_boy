import DonationInput from "@/components/donationInput";
import Shelters from "@/components/shelters";
import ToggleButtons from "@/components/toggleButtons";
import TopStepper from "@/components/topStepper";
import ToggleAmounts from "@/components/toggleAmounts";
import DonationForm from "@/components/donationForm";

export default function Home() {
  return (
    <div>
      <TopStepper activeStep={0} />

      <DonationForm />
    </div>
  );
}
