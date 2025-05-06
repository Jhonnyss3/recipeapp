import styles from '../../internal.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CafeExpressoPage() {
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
                src="/expresso.jpeg"
                alt="Café Expresso"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Café Expresso</h1>
            <div className={styles.content}>
              <p>
                O café expresso é uma bebida clássica, intensa e aromática. Veja como preparar:
              </p>
              <ol>
                <li>Moer 7-9g de café de alta qualidade.</li>
                <li>Compactar o pó no porta-filtro.</li>
                <li>Extrair sob pressão (9 bar) por 25-30 segundos.</li>
                <li>Servir imediatamente em xícara pequena.</li>
              </ol>
              <p>
                Dica: Use água filtrada e limpe o equipamento antes de cada preparo para garantir o melhor sabor!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}