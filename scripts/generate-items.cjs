// Generate data/items.ts from data/allergy.csv
// Run: node scripts/generate-items.cjs

const fs = require("fs");
const path = require("path");

function parseCsv(input) {
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;
  const pushField = () => {
    row.push(field);
    field = "";
  };
  const pushRow = () => {
    rows.push(row);
    row = [];
  };
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    if (inQuotes) {
      if (ch === `"`) {
        const next = input[i + 1];
        if (next === `"`) {
          field += `"`;
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else {
      if (ch === `"`) {
        inQuotes = true;
      } else if (ch === ",") {
        pushField();
      } else if (ch === "\r") {
        // skip
      } else if (ch === "\n") {
        pushField();
        pushRow();
      } else {
        field += ch;
      }
    }
  }
  if (field.length > 0 || row.length > 0) {
    pushField();
    pushRow();
  }
  return rows;
}

function buildItemsFromCsv(csvText) {
  const rows = parseCsv(csvText);
  const items = [];

  const colToKey = {
    1: "fryerCC",
    2: "dairy",
    3: "egg",
    4: "gluten",
    5: "fish",
    6: "shellfish",
    7: "mollusk",
    8: "treeNuts",
    9: "peanuts",
    10: "soy",
    11: "sesame",
    12: "pork",
    13: "allium",
  };

  for (const cols of rows) {
    if (!cols || cols.length === 0) continue;
    const name = (cols[0] || "").trim();
    if (!name) continue;
    if (name === "Column1") continue;
    if (name.endsWith(":")) continue;
    if (name.startsWith("STK Dinner Menu Item")) continue;

    const allergens = {};
    for (const [indexStr, key] of Object.entries(colToKey)) {
      const idx = Number(indexStr);
      const raw = cols[idx] ?? "";
      const val = String(raw).trim();
      if (val) allergens[key] = val;
    }
    items.push({ name, allergens });
  }

  return { items };
}

function generate() {
  const repoRoot = process.cwd();
  const csvPath = path.join(repoRoot, "data", "allergy.csv");
  const outPath = path.join(repoRoot, "data", "items.ts");

  if (!fs.existsSync(csvPath)) {
    console.error(`Missing CSV at ${csvPath}`);
    process.exit(1);
  }

  const csvText = fs.readFileSync(csvPath, "utf8");
  const data = buildItemsFromCsv(csvText);
  const file = [
    "/* Auto-generated from data/allergy.csv. Do not edit by hand. */",
    "export const items = " + JSON.stringify(data, null, 2) + " as const;",
    "",
  ].join("\n");

  fs.writeFileSync(outPath, file, "utf8");
  console.log(`Wrote ${outPath} (${data.items.length} items)`);
}

generate();


