import TopStepper from "@/components/topStepper";
import { Grid, Stack, Button } from "@mui/material";

export default function Step2() {
  return (
    <div>
      {/* ---------------ROW A ----------------------------------------------------------- */}
      <div>
        <TopStepper activeStep={1} />
      </div>

      {/*----------------ROW B---------------------------------------------------------------- */}
      <div></div>
    </div>
  );
}
