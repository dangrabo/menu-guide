'use client'

import { items } from "@/data/items";
import ItemRow from './components/ItemRow';
import { useState } from 'react';

type MenuItem = (typeof items)['items'][number];
const allItems = items.items;

export default function Home() {
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(Array.from(allItems));

  function filterItems(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setFilteredItems(Array.from(allItems).filter(item => (item.name.toLowerCase().includes(value.toLowerCase()))))
  }

  return (
    <main className="w-full flex flex-col gap-6">
      <div className="flex items-center justify-between gap-3">
        <input
          type="text"
          onChange={filterItems}
          placeholder="Search menu items…"
          className="w-full max-w-md rounded-lg border border-(--border) bg-(--muted)/60 text-foreground placeholder:text-zinc-400 px-4 py-2 outline-none focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/30 transition"
        />
      </div>
      <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-(--border) bg-(--card)">
        <table className="w-full">
        <thead>
          <tr>
              <th>Food Item</th>
              <th>Allergens</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <ItemRow key={index} {...item} />
          ))}
        </tbody>
        </table>
      </div>
      <p className="text-xs text-zinc-400 mt-2">
        FryerCC: X = (dairy, egg, gluten, fish, allium)
      </p>
    </main>
  );
}
