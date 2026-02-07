import ToggleBtns from "@/components/toggleButtons";
import TopStepper from "@/components/topStepper";

import { Grid, Stack, Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <div>
        <TopStepper activeStep={0} />
      </div>

      <h1>Vyberte si možnosť, ako chcete pomôcť</h1>

      <div>
        <ToggleBtns />
      </div>
    </>
  );
}
