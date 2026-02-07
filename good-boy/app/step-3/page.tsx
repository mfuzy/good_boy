import TopStepper from "@/components/topStepper";
import { Grid, Stack, Button } from "@mui/material";

export default function Step3() {
  return (
    <div>
      {/* ---------------ROW A ----------------------------------------------------------- */}
      <div>
        <TopStepper activeStep={2} />
      </div>

      {/*----------------ROW B---------------------------------------------------------------- */}
      <div></div>
    </div>
  );
}
