import Image from "next/image";
import TopStepper from "@/components/topStepper";
import DonationForm from "@/components/donationForm";

export default function Home() {
  return (
    <div className="wrapper">
      <main className="content">
        <TopStepper activeStep={0} />

        <DonationForm />
      </main>

      <aside className="sidebar">
        <Image
          src="/Dog1.png"
          alt="Pes"
          width={600}
          height={400}
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
