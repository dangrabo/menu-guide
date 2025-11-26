/* Generated from data/allergy.csv: exports a flat-string allergen map per item. */

type AllergenKey =
  | "dairy"
  | "egg"
  | "gluten"
  | "fish"
  | "shellfish"
  | "mollusk"
  | "treeNuts"
  | "peanuts"
  | "soy"
  | "sesame"
  | "pork"
  | "allium"
  | "fryerCC";

export interface MenuItem {
  name: string;
  allergens: Partial<Record<AllergenKey, string>>;
}

export interface ItemsExport {
  items: MenuItem[];
}

const csv = `Column1,Column2,Column3,Column4,Column5,Column6,Column7,Column8,Column9,Column10,Column11,Column12,Column13,Column14
"STK Dinner Menu Item
X=Contains O=Removable
CC=Cross Contamination","FRYER CROSS
CONTAMINATION
(dairy, egg, gluten,
fish, allium)",DAIRY,EGG,GLUTEN,FISH,SHELLFISH,MOLLUSK,TREE NUTS,PEANUTS,SOY,SESAME,Pork,Allium(Garlic/Onion)
House Bread Full Setup,,O - butter,,X,,,,,,X,,,O - blue butter/ chive oil
Salad:,,,,,,,,,,,,,
Baby Gem Caesar,,O - parmesan / dressing,O - dressing,O - croutons,O - dressing,,,,,,,,O - dressing/ chives
Blue Iceberg,,O - dressing / blue cheese,O - dressing,O - dressing,O - dressing,,,,,O - dressing,O - dressing,O - bacon,O - dressing/ chives
Burrata,,X,,O - croutons,,,,,,,,,O
Apps:,,,,,,,,,,,,,
Tuna Tartare,taro chips,,,O - soy emulsion,X,,,,,O - soy emulsion,,,
Fried Calamari,X,X,O - garlic aioli,X,,X,X,,,,,,O
Lil' Brgs,"","O - cheese, bun",O - special sauce,O - bun,,,,,,,O - bun,,"O - carm. onion, special sauce"
Jumbo Lump Crab Cake,,X,X,X,,X,,,,,O - cucumber salad,,X
Maple Bacon,,X,O - slaw,,,,,,,,,X,X
Cheesesteak Eggrolls,,X,o - sweet pickle fry sauce / mustard ranch,X,o - sweet pickle fry sauce,,,,,,,,X
Raw Bar:,,,,,,,,,,,,,
Red King Crab,,,O - dijonaise,,,X,,,,,,,
Jalapeno Pickled Shrimp Cocktail,,,,O - cocktail sauce,O - cocktail sauce,X,,,,O - cocktail sauce,,,X
Ceviche,Daily Feature,,,,,,,,,,,,
STK Pearls,,,,O - cocktail sauce,X,X,X,,,O - cocktail sauce,,,O - cocktail sauce / mignonette
Oysters,,,,O - cocktail sauce,O - cocktail sauce,X,X,,,O - cocktail sauce,,,O - cocktail sauce / mignonette
Imperia Kaluga Reserve,,,O - egg,O - blinis,X,,,,,,,,O - chives / shallots
SHELLFISH PLATTER,,O - dungeness crab salad,O - dijonaise / crab salad,O - cocktail sauce,X,X,X,,,O - cocktail sauce,,,O - mignonette / marinated clams
Calamari / Mussels,,,,,,X,X,,,,,,X
Clams,,,,,,X,X,,,,,,X
Ceviche,,,,,X,,,,,,,,X
Lobster Portion (COLD),,,,,,X,,,,,,,
Pickled Shrimp,,,,,,X,,,,,,,X
Crab Salad,,X,X,,,X,,,,,,,
Oysters,,,,,,X,X,,,,,,
Sides:,,,,,,,,,,,,,
Parmesan Truffle Fries,X,O - parmesan cheese,O - fry sauce,X,,,,,,X,,O - Fry Sauce,O - chives
Creamed Spinach,shallots,X,,X,,,,,,,,,X
Yukon Mashed Potatoes,,X,,O - parmesan crust,,,,,,,,,
Market Vegetables,Daily Feature,,,,,,,,,,,,
Tater Tots,X,X,O - Chili Remoulade,,,,,,,,,,O - chives
Sweet Corn Pudding,,X,,,,,,,,,,,O - chives
Brussels Sprouts,X,,,,,,,,,,,X,O - bacon glaze
Confit Mushrooms,,O - cheese,,,,,,,,,,X,X
Mac And Cheese,,X,X,X,,,,,,,,,X
Bacon Mac And Cheese,,X,X,X,,,,,,,,X,X
Lobster Mac And Cheese,,X,X,X,,X,,,,,,,X
Asparagus,,,,,,,,,,,,,
Mushroom Pot Pie,,X,X,X,,,,,,X,,,X
Potato Gratin,,X,,X,,,,,,,,,X
Mains:,,,,,,,,,,,,,
Maple Rubbed Salmon,,,,,X,,,,,,,,O - maple glaze / olive tapenade
Free Range Chicken,,O - vegetables / mustard sauce,,,,,,,,,,,O - seasonal vegetable
Braised Beef Short Rib,shallots,O - mashed potatoes,,O - crispy shallots,,,,,,,,,X
Fish and Chips,x,,O - tartar / coleslaw,X,X,,,,,,,,
Lobster Linguine,,X,X,X,,X,,,,,,,X
Mushroom Tagliatelle,,X,X,X,,,,,,,,,X
Miso Glazed Sea Bass,crispy shallots,O - crispy shallots,,X,X,,,,,X,O - togarashi,,O - crispy shallots
Roasted Lamb Rack,,O - butter,,,,,,,,,,,X
Toppings:,,,,,,,,,,,,,
King Crab Oscar,,X,X,,,X,,,,,,,X
Shrimp Topping,,O - butter,,,,X,,,,,,,X
Jalapeno Onion Jam,,,,X,,,,,,X,,,X
Hot Lobster Tail,,O - butter,,,,X,,,,,,,X
Fresh Truffle,,,,,,,,,,,,,
Peppercorn Crust,,,,,,,,,,,,,
Zingy Rub,,,,,,,,,,,,,X
Sauces:,,,,,,,,,,,,,
Dijonnaise,,,X,,,,,,,,,,
Bacon Jalapeno Fry Sauce,,,X,,,,,,,,,X,X
Mignonette,,,,,,,,,,,,,X
Cocktail Sauce,,,,X,X,,,,,X,,,X
Raw Horseradish,,,,,,,,,,,,,
Mustard Cream,,X,X,,,,,,,,,,
Chili Remoulade,,,X,,,,,,,,,,X
STK Sauce,,,,,X,,,,,,,,X
STK Bold Sauce,,,,X,X,,,,,X,,,X
Au Poivre,,X,,,,,,,,,,,X
Red Wine Sauce,,X,,,,,,,,,,,X
Bearnaise,,X,X,,,,,,,,,,X
Horseradish Cream,,X,X,X,X,,,,,X,,,X
Chimichurri,,,,,,,,,,,,,X
Blue Cheese Butter,,X,,,,,,,,,,,X
Butter Toppers:,,,,,,,,,,,,,
Truffle Butter,,X,,,X,,,,,,,,
Lobster Butter,,X,,,,X,,,,,,,X
Umami Butter,,X,,,X,,,,,,,,X
Red Wine Finishing Butter,,X,,,,,,,,,,,X
Desserts:,,,,,,,,,,,,,
Bag Of Dounuts,,X,X,X,,,,,,,,,
Chocolate Cake,,X,X,X,,,,factory cc,factory cc,,,,
Cheesecake,,X,X,X,,,,factory cc,factory cc,,,,
Apple Pie,,X,X,X,,,,factory cc,factory cc,,,,
Chocolate Cookie,,X,X,X,,,,,,,,,
Ice Cream,,X,X,,,,,,,,,,`;

function parseCsv(input: string): string[][] {
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
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
  // push last field/row if needed
  if (field.length > 0 || row.length > 0) {
    pushField();
    pushRow();
  }
  return rows;
}

function buildItems(): ItemsExport {
  const rows = parseCsv(csv);
  const items: MenuItem[] = [];

  const colToKey: Record<number, AllergenKey> = {
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

  for (let r = 0; r < rows.length; r++) {
    const cols = rows[r];
    if (!cols || cols.length === 0) continue;
    const name = (cols[0] || "").trim();
    if (!name) continue;
    if (name === "Column1") continue;
    if (name.endsWith(":")) continue; // category rows
    if (name.startsWith("STK Dinner Menu Item")) continue; // header blob

    const allergens: Partial<Record<AllergenKey, string>> = {};
    for (const [indexStr, key] of Object.entries(colToKey)) {
      const idx = Number(indexStr);
      const raw = cols[idx] ?? "";
      const val = raw.trim();
      if (val) {
        allergens[key] = val;
      }
    }

    items.push({ name, allergens });
  }

  return { items };
}

export const items: ItemsExport = buildItems();



