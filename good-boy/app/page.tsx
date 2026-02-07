import DonationInput from "@/components/donationInput";
import DonationValues from "@/components/toggleAmounts";
import Shelters from "@/components/shelters";
import ToggleButtons from "@/components/toggleButtons";
import TopStepper from "@/components/topStepper";
import ToggleAmounts from "@/components/toggleAmounts";

export default function Home() {
  return (
    <>
      <div>
        <TopStepper activeStep={0} />
      </div>

      <h1>Vyberte si možnosť, ako chcete pomôcť</h1>

      <div>
        <ToggleButtons />
      </div>

      <div>O projekte</div>

      <div>Útulok (Nepovinné)</div>
      <Shelters />

      <div>Suma, ktorou chcem prispieť</div>
      <DonationInput />

      <ToggleAmounts />
    </>
  );
}
