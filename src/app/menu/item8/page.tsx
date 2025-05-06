import styles from '../../internal.module.css';
import Image from 'next/image';

export default function IrishCoffeePage() {
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
                src="/irish-coffee.png"
                alt="Irish Coffee"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Irish Coffee</h1>
            <div className={styles.content}>
              <p>
                O Irish Coffee é uma bebida clássica que combina café, uísque irlandês, açúcar e creme, perfeita para aquecer em dias frios. Veja como preparar:
              </p>
              <ol>
                <li>Prepare um café forte (cerca de 120ml).</li>
                <li>Adoce com 1 a 2 colheres de chá de açúcar mascavo e misture bem.</li>
                <li>Adicione 40ml de uísque irlandês ao café.</li>
                <li>Misture e despeje em um copo resistente ao calor.</li>
                <li>Com uma colher, adicione delicadamente creme de leite fresco levemente batido por cima, para flutuar sobre o café.</li>
                <li>Não misture! Beba o café através do creme.</li>
              </ol>
              <p>
                Dica: Aqueça o copo antes de montar a bebida para manter o Irish Coffee quente por mais tempo!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}