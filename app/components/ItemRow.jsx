export default function ItemRow({ name, allergens }) {
  const keys = Object.keys(allergens);

  return (
    <tr>
      <td>{name}</td>
      <td>
        {keys.map((key, idx) => {
          const label = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <div key={key}>
              <div>{`${label}: ${allergens[key]}`}</div>
              {idx < keys.length - 1 && (
                <hr className="my-2 border-t" style={{ borderColor: "var(--border)", opacity: 0.5 }} />
              )}
            </div>
          );
        })}
      </td>
    </tr>
  );
}
