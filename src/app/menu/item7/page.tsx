import styles from '../../internal.module.css';
import Image from 'next/image';

export default function AffogatoPage() {
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
                src="/affogato.png"
                alt="Affogato"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Affogato</h1>
            <div className={styles.content}>
              <p>
                O affogato é uma sobremesa italiana deliciosa, que combina café expresso quente com sorvete gelado. Veja como preparar:
              </p>
              <ol>
                <li>Coloque uma bola generosa de sorvete de baunilha em uma taça ou copo pequeno.</li>
                <li>Prepare um café expresso (cerca de 30-50ml).</li>
                <li>Despeje o expresso quente diretamente sobre o sorvete.</li>
                <li>Sirva imediatamente, aproveitando o contraste de temperaturas e sabores.</li>
              </ol>
              <p>
                Dica: Experimente com outros sabores de sorvete, como chocolate ou avelã, para variações deliciosas!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}