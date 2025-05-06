import styles from '../../internal.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CafeCoadoPage() {
  return (
    <>
      <header className={styles.header}>
      <Link href="/">Voltar</Link>
      </header>
      <main className={styles['center-container']}>
        <section className={styles['content-block']}>
          <div className={styles['media-side']}>
            <div className={styles['media-wrapper']}>
              <Image
                src="/coado.png"
                alt="Café Coado"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Café Coado</h1>
            <div className={styles.content}>
              <p>
                O café coado é um clássico brasileiro, apreciado por seu sabor suave e aroma marcante. Veja como preparar:
              </p>
              <ol>
                <li>Ferva água filtrada e deixe esfriar por 1 minuto após levantar fervura.</li>
                <li>Coloque o filtro de papel no suporte e enxágue com água quente.</li>
                <li>Adicione 1 colher de sopa (10g) de café moído para cada 100ml de água.</li>
                <li>Despeje a água lentamente, em movimentos circulares, até completar a extração.</li>
                <li>Sirva em xícara ou caneca e aproveite!</li>
              </ol>
              <p>
                Dica: Use café moído na hora e água de boa qualidade para realçar o sabor!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}