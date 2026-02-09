import TopStepper from "@/components/client/topStepper";
import DogImage from "@/components/server/DogImage";
import Footer from "../../components/server/footer";
import Confirmation from "@/components/client/confirmation";

export default function Step3() {
  return (
    <div className="wrapper">
      <main className="content">
        <TopStepper activeStep={2} />

        <Confirmation />

        <Footer showSocials={false} />
      </main>

      <aside className="sidebar">
        <DogImage />
      </aside>
    </div>
  );
}
