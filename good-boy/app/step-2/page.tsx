import DonorForm from "@/components/donorForm";
import TopStepper from "@/components/topStepper";

export default function Step2() {
  return (
    <div>
      <div>
        <TopStepper activeStep={1} />
      </div>

      <div>
        <h1>Potrebujeme do Vás zopár informácií</h1>
      </div>

      <p>O vás</p>

      <DonorForm />
    </div>
  );
}
