import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <Image src="/Mascot.png" alt="Mascot" width={40} height={60} />
        <Image src="/GB.png" alt="Good Boy" width={80} height={10} />
      </div>

      <div className="footerRight">
        <Image src="/Socials.png" alt="Socials" width={60} height={10} />
        <a href="/contact">Kontakt</a>
        <a href="/about">O projekte</a>
      </div>
    </div>
  );
}
