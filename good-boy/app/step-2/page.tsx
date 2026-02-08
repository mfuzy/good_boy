import Image from "next/image";
import DonorForm from "@/components/donorForm";
import TopStepper from "@/components/topStepper";
import Footer from "../footer";

export default function Step2() {
  return (
    <div className="wrapper">
      <main className="content">
        <TopStepper activeStep={1} />

        <DonorForm />

        <Footer />
      </main>

      <aside className="sidebar">
        <Image
          src="/Dog1.png"
          alt="Pes"
          width={600}
          height={980}
          priority
          style={{
            height: "100%",
            width: "auto",
          }}
        />
      </aside>
    </div>
  );
}
