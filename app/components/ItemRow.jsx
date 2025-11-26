export default function ItemRow({ name, allergens }) {
  const keys = Object.keys(allergens);

  return (
    <tr>
      <td>{name}</td>
      <td>
        {keys.map((key, idx) => (
          <div key={key}>
            <div>{`${key}: ${allergens[key]}`}</div>
            {idx < keys.length - 1 && (
              <hr className="my-2 border-t" style={{ borderColor: "var(--border)", opacity: 0.5 }} />
            )}
          </div>
        ))}
      </td>
    </tr>
  );
}
