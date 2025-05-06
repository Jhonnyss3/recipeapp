import styles from '../../internal.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function LattePage() {
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
                src="/latte.png"
                alt="Latte"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Latte</h1>
            <div className={styles.content}>
              <p>
                O latte é uma bebida suave e cremosa, perfeita para quem gosta de café com bastante leite vaporizado. Veja como preparar:
              </p>
              <ol>
                <li>Prepare um café expresso (cerca de 30ml).</li>
                <li>Aqueça e vaporize cerca de 150ml de leite até ficar cremoso, mas com pouca espuma.</li>
                <li>Despeje o leite vaporizado sobre o expresso, segurando a espuma com uma colher.</li>
                <li>Finalize com uma fina camada de espuma de leite por cima.</li>
                <li>Se quiser, decore com arte no leite (latte art)!</li>
              </ol>
              <p>
                Dica: Sirva em um copo alto para valorizar as camadas do latte!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}