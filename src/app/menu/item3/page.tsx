import styles from '../../internal.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CappuccinoPage() {
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
                src="/cappuccino.png"
                alt="Cappuccino"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Cappuccino</h1>
            <div className={styles.content}>
              <p>
                O cappuccino é uma bebida cremosa e equilibrada, perfeita para quem aprecia café com leite e espuma. Veja como preparar:
              </p>
              <ol>
                <li>Prepare um café expresso curto (cerca de 30ml).</li>
                <li>Aqueça e vaporize 60ml de leite até formar uma espuma densa.</li>
                <li>Despeje o leite vaporizado sobre o expresso, segurando a espuma com uma colher.</li>
                <li>Finalize com a espuma de leite por cima.</li>
                <li>Se desejar, polvilhe canela ou chocolate em pó.</li>
              </ol>
              <p>
                Dica: Use leite integral para uma espuma mais cremosa e estável!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}