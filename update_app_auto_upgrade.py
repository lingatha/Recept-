import json
import re

with open('recipes_db.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

json_str = json.dumps(db, ensure_ascii=False, indent=2)

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Clean existing AUTHENTIC_RECIPES block if present
content = re.sub(r'// Recept Master Pro[\s\S]*?const AUTHENTIC_RECIPES = [\s\S]*?;\n\n', '', content)

header = f'// Recept Master Pro - Auto-Upgrading Engine\n\nconst AUTHENTIC_RECIPES = {json_str};\nconst DB_VERSION = "v4.0_flawless_pdf";\n\n'

load_func = """function loadRecipes() {
  const storedVersion = localStorage.getItem("recept_master_version");
  if (storedVersion === DB_VERSION) {
    const saved = localStorage.getItem("recept_master_db");
    if (saved) {
      try {
        recipes = JSON.parse(saved);
        console.log("Rezepte aus LocalStorage geladen:", recipes.length);
        return;
      } catch (e) {
        console.error("LocalStorage-Fehler:", e);
      }
    }
  }
  recipes = AUTHENTIC_RECIPES;
  localStorage.setItem("recept_master_version", DB_VERSION);
  saveToLocalStorage();
  console.log("Neue authentische 100% PDF-Rezepte geladen:", recipes.length);
}"""

content = re.sub(r'function loadRecipes\(\) \{[\s\S]*?\n\}', load_func, content)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(header + content)

print("Updated app.js with DB_VERSION auto-upgrade successfully!")
