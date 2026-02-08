import DonorForm from "@/components/donorForm";
import FooterStepButtons from "@/components/footerStepButtons";
import TopStepper from "@/components/topStepper";
import { Grid, Stack, Button } from "@mui/material";

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

      <FooterStepButtons prevRoute={"/"} nextRoute="/step-3" />
    </div>
  );
}
