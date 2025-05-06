import styles from '../../internal.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CafeGeladoPage() {
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
                src="/cafe-gelado.png"
                alt="Café Gelado"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Café Gelado</h1>
            <div className={styles.content}>
              <p>
                O café gelado é uma opção refrescante e saborosa para dias quentes. Veja como preparar:
              </p>
              <ol>
                <li>Prepare um café forte (expresso ou coado) e deixe esfriar.</li>
                <li>Encha um copo alto com gelo.</li>
                <li>Despeje o café frio sobre o gelo.</li>
                <li>Adicione açúcar, leite ou xarope a gosto.</li>
                <li>Misture bem e sirva imediatamente.</li>
              </ol>
              <p>
                Dica: Experimente adicionar uma bola de sorvete de creme para um café gelado ainda mais especial!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}