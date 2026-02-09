import Image from "next/image";
import Footer from "../../components/server/footer";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="wrapper_contact">
      <main className="">
        <div>
          <Button size="small" variant="text" startIcon={<ArrowBackIcon />} sx={{ textTransform: "none" }}>
            <Link href="/step-3">Späť</Link>
          </Button>
        </div>
        <p style={{ fontSize: "35px", fontWeight: "bold" }}>Kontakt</p>
      </main>

      <aside className="">
        <Image
          src="/Dog2.png"
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

      <Footer showSocials={true} />
    </div>
  );
}
