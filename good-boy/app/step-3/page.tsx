import TopStepper from "@/components/topStepper";
import { Grid, Stack, Button } from "@mui/material";

export default function Step3() {
  return (
    <Grid container spacing={1} direction={"column"} px={1} py={1}>
      {/* ---------------ROW A ----------------------------------------------------------- */}
      <Grid>
        <TopStepper activeStep={2} />
      </Grid>

      {/*----------------ROW B---------------------------------------------------------------- */}
      <Grid></Grid>
    </Grid>
  );
}
