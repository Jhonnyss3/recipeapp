import Link from 'next/link';
import styles from './fp.module.css';

const items = [
  'Café Expresso',
  'Café Coado',
  'Cappuccino',
  'Latte',
  'Mocha',
  'Macchiato',
  'Affogato',
  'Irish Coffee',
  'Café Gelado',
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Cardápio de Cafés</h1>
      <div className={styles.grid}>
        {items.map((item, idx) => (
          <Link
            href={`/menu/item${idx + 1}`}
            key={idx}
            className={styles.card}
          >
            {item}
          </Link>
        ))}
      </div>
    </main>
  );
}