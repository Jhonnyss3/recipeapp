import styles from '../../internal.module.css';
import Image from 'next/image';

export default function MochaPage() {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles['back-btn']} aria-label="Voltar">&lt;</a>
      </header>
      <main className={styles['center-container']}>
        <section className={styles['content-block']}>
          <div className={styles['media-side']}>
            <div className={styles['media-wrapper']}>
              <Image
                src="/mocha.png"
                alt="Mocha"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Mocha</h1>
            <div className={styles.content}>
              <p>
                O mocha é uma deliciosa combinação de café, leite vaporizado e chocolate, perfeito para quem gosta de um toque doce. Veja como preparar:
              </p>
              <ol>
                <li>Prepare um café expresso (cerca de 30ml).</li>
                <li>Aqueça 120ml de leite e vaporize até ficar cremoso.</li>
                <li>Adicione 20-30g de chocolate em pó ou calda de chocolate ao expresso e misture bem.</li>
                <li>Despeje o leite vaporizado sobre a mistura de café e chocolate.</li>
                <li>Finalize com chantilly e polvilhe chocolate em pó, se desejar.</li>
              </ol>
              <p>
                Dica: Use chocolate meio amargo para equilibrar o sabor doce do mocha!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}