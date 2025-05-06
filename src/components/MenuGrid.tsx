import Link from 'next/link';
import { menuItems } from '../data/menuItems';

export default function MenuGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      {menuItems.map(item => (
        <Link key={item.id} href={`/menu/${item.id}`}>
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center h-40 cursor-pointer hover:scale-105 transition">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mb-2 rounded" />
            <span className="font-semibold">{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}