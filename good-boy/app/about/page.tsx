import Footer from "../../components/server/footer";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import AboutSection from "@/components/server/aboutSection";

export default function About() {
  return (
    <div className="wrapper_contact_page">
      <main>
        <div>
          <Button size="small" variant="text" startIcon={<ArrowBackIcon />} sx={{ textTransform: "none" }}>
            <Link href="/contact"> Späť</Link>
          </Button>
        </div>

        <AboutSection />
      </main>

      <div style={{ flexGrow: 1 }}></div>

      <Footer showSocials={false} />
    </div>
  );
}
