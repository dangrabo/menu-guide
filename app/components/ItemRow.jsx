export default function ItemRow({ name, allergens }) {
  const keys = Object.keys(allergens);
  let allergenString = "";
  for (let key of keys) allergenString += `${key}: ${allergens[key]}\n`;

  return (
    <tr>
      <td>{name}</td>
      <td className="whitespace-pre-line">{allergenString}</td>
    </tr>
  );
}
