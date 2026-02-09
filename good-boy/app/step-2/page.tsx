import DogImage from "@/components/server/DogImage";
import DonorForm from "@/components/client/donorForm";
import TopStepper from "@/components/client/topStepper";
import Footer from "../../components/server/footer";

export default function Step2() {
  return (
    <div className="wrapper">
      <main className="content">
        <TopStepper activeStep={1} />

        <DonorForm />

        <Footer />
      </main>

      <aside className="sidebar">
        <DogImage />
      </aside>
    </div>
  );
}
