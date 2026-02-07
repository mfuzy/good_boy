"use client";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

type TProps = {
  activeStep: number;
};

const steps = ["Výber útulku", "Osobné údaje", "Potvrdenie"];

export default function TopStepper({ activeStep }: TProps) {
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
