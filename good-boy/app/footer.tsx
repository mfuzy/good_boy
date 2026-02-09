import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <Image src="/Mascot.png" alt="Mascot" width={30} height={80} />
        <Image src="/GB.png" alt="Good Boy" width={80} height={10} />
      </div>

      <div className={styles.footerRight}>
        <Image src="/Socials.png" alt="Socials" width={60} height={10} />
        <a href="/contact">Kontakt</a>
        <a href="/about">O projekte</a>
      </div>
    </div>
  );
}
