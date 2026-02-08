import Image from "next/image";
import TopStepper from "@/components/topStepper";
import DonationForm from "@/components/donationForm";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="wrapper">
      <main className="content">
        <TopStepper activeStep={0} />

        <DonationForm />

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
