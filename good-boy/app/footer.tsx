import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <Image
        src="/Mascot.png"
        alt="Pes"
        width={40}
        height={60}
        style={{
          height: "100%",
          width: "auto",
        }}
        priority
      />
      <Image src="/GB.png" alt="Good Boy" width={40} height={10} />
      <Image src="/Socials.png" alt="Socials" width={40} height={10} />
      Kontakt O projekte
    </div>
  );
}
