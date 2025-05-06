import styles from '../../internal.module.css';
import Image from 'next/image';

export default function MacchiatoPage() {
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
                src="/macchiato.png"
                alt="Macchiato"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 90vw, 320px"
                priority
              />
            </div>
          </div>
          <div className={styles['content-side']}>
            <h1 className={styles.title}>Macchiato</h1>
            <div className={styles.content}>
              <p>
                O macchiato é um café expresso "manchado" com um pouco de leite vaporizado, ideal para quem prefere um café intenso com um leve toque cremoso. Veja como preparar:
              </p>
              <ol>
                <li>Prepare um café expresso (cerca de 30ml).</li>
                <li>Vaporize uma pequena quantidade de leite até formar espuma.</li>
                <li>Adicione uma colher de chá da espuma de leite sobre o expresso.</li>
                <li>Sirva imediatamente em uma xícara pequena.</li>
              </ol>
              <p>
                Dica: O macchiato tradicional leva apenas um toque de leite, mas você pode ajustar a quantidade conforme seu gosto!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}