import styles from "./contactSection.module.css";

export default function ContactSection() {
  return (
    <div className={styles.contact_container}>
      <p className={styles.big_title}>Kontakt</p>
      <div className={styles.contact_block_container}>
        <div className={styles.contact_block}>
          <img src="/post.png" alt="post" width={40} height={40} />
          <span className={styles.title}>Email</span>
          <span className={styles.statement}> Our friendly team is here to help.</span>
          <span className={styles.contact}>hello@goodrequest.com</span>
        </div>

        <div className={styles.contact_block}>
          <img src="/location.png" alt="location" width={40} height={40} />
          <span className={styles.title}>Office</span>
          <span className={styles.statement}> Come say hello at our office HQ.</span>
          <span className={styles.contact}>Obchodná 3D, 010 08 Žilina, Slovakia</span>
        </div>

        <div className={styles.contact_block}>
          <img src="/phone.png" alt="phone" width={40} height={40} />
          <span className={styles.title}>Phone</span>
          <span className={styles.statement}>Mon-Fri from 8am to 5pm.</span>
          <span className={styles.contact}>+421 911 750 750</span>
        </div>
      </div>
    </div>
  );
}
