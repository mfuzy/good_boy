import Image from "next/image";
import Footer from "../../components/server/footer";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import ContactSection from "@/components/server/contactSection";

export default function Contact() {
  return (
    <div className="wrapper_contact_page">
      <main>
        <div>
          <Button size="small" variant="text" startIcon={<ArrowBackIcon />} sx={{ textTransform: "none" }}>
            <Link href="/step-3"> Späť</Link>
          </Button>
        </div>

        <ContactSection />
      </main>

      <div style={{ flexGrow: 1 }}></div>

      <aside>
        <Image src="/Dog2.png" alt="Pes" width={800} height={270} priority />
      </aside>

      <Footer showSocials={true} />
    </div>
  );
}
