import TopStepper from "@/components/client/topStepper";
import DonationForm from "@/components/client/donationForm";
import Footer from "../components/server/footer";
import DogImage from "@/components/server/dogImage";

export default function Home() {
  return (
    <div className="wrapper">
      <main className="content">
        <TopStepper activeStep={0} />

        <DonationForm />

        <Footer showSocials={true} />
      </main>

      <aside className="sidebar">
        <DogImage />
      </aside>
    </div>
  );
}
