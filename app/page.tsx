'use client'

import { items } from "@/data/items";
import ItemRow from './components/ItemRow';
import { useState } from 'react';

const allItems = items.items;

export default function Home() {
  const [filteredItems, setFilteredItems] = useState(allItems);

  function filterItems(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setFilteredItems(allItems.filter(item => (item.name.includes(value) || item.name.toLocaleLowerCase().includes(value))))
  }

  return (
    <main className="m-auto w-full md:w-[80%] flex flex-col items-center">
      <input type="text" onChange={filterItems} className="m-4 w-[30%] bg-amber-50 text-black"/>
      <table className="m-auto bg-red-900 w-full">
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Alergens</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <ItemRow key={index} {...item} />
          ))}
        </tbody>
      </table>
    </main>
  );
}
