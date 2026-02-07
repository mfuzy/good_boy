import ToggleButtons from "@/components/toggleButtons";
import TopStepper from "@/components/topStepper";

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

      <div>Útulok</div>
    </>
  );
}
