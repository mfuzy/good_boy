import TopStepper from "@/components/client/topStepper";
import DogImage from "@/components/server/DogImage";

import Footer from "../../components/server/footer";

export default function Step3() {
  return (
    <div className="wrapper">
      <main className="content">
        <TopStepper activeStep={1} />

        <Footer />
      </main>

      <aside className="sidebar">
        <DogImage />
      </aside>
    </div>
  );
}
