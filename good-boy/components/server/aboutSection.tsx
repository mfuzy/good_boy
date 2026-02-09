import styles from "./aboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.about_container}>
      <p className={styles.big_title}>O projekte</p>
      <div className={styles.top_section}>
        Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline na Slovensku. Zachraňujeme opustené, týrané a
        bezdomovské psy, poskytujeme im lekársku starostlivosť, útočisko a lásku, ktorú si zaslúžia. Naším poslaním je
        dať týmto verným spoločníkom druhú šancu na život tým, že im nájdeme milujúci domov. Okrem záchrany a
        rehabilitácie sa zameriavame aj na podporu zodpovedného vlastníctva zvierat a ochrany zvierat prostredníctvom
        vzdelávacích a komunitných programov.
      </div>

      <div className={styles.middle_section}>
        <div className={styles.middle_section_block}>
          <div className={styles.val}>56456465465464456465466</div>
          <strong>Celková vyzbieraná hodnota</strong>{" "}
        </div>
        <div className={styles.middle_section_block}>
          <div className={styles.val}>7787468486484844448484</div>

          <strong>Počet darcov</strong>
        </div>
      </div>
      <div className={styles.bottom_section}>
        Naša práca je možná vďaka podpore vášnivých dobrovoľníkov, štedrých darcov a komunity, ktorá sa hlboko stará o
        dobro zvierat. Organizujeme aj kastračné a sterilizačné iniciatívy, aby sme riešili problém túlavých psov a
        zabezpečili dlhodobý vplyv. V nadácii Good Boy veríme, že každý pes si zaslúži bezpečný, milujúci domov a
        šťastný život. Pridajte sa k nám a pomôžte nám robiť zmeny – či už dobrovoľníctvom, darovaním alebo adopciou
        chlpatého priateľa. Spoločne môžeme vytvoriť lepšiu budúcnosť pre psy v Žiline.
      </div>
    </div>
  );
}
