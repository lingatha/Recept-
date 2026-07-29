import json
import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace renderRecipes function in app.js
new_render_func = """function renderRecipes(recipesToRender = recipes) {
  const grid = document.getElementById("recipeGrid");
  const countBadge = document.getElementById("recipeCountBadge");
  grid.innerHTML = "";

  if (!recipesToRender || recipesToRender.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">Keine Rezepte gefunden.</p>
        <p style="font-size: 0.9rem;">Überprüfen Sie Ihren Suchbegriff oder wählen Sie eine andere Kategorie.</p>
      </div>
    `;
    if (countBadge) countBadge.innerText = "0 Rezepte gefunden";
    return;
  }

  if (countBadge) {
    countBadge.innerText = `${recipesToRender.length} Rezept${recipesToRender.length === 1 ? '' : 'e'} verfügbar`;
  }

  recipesToRender.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-box-card";
    card.onclick = () => openDetailModal(recipe.id);

    card.innerHTML = `
      <div>
        <div class="box-top">
          <span class="badge">${recipe.category}</span>
          <span style="font-size: 1.1rem;">🥩</span>
        </div>
        <h3 class="box-title">${recipe.title}</h3>
        <div class="box-weight">
          <span>Basis-Einwaage:</span>
          <strong>${recipe.base_batch_kg} kg</strong>
        </div>
      </div>
      <div class="box-action-hint">
        <span>🔍 Details & Berechnen</span>
        <span>➔</span>
      </div>
    `;
    grid.appendChild(card);
  });
}"""

content = re.sub(r'function renderRecipes\([\s\S]*?\n\}', new_render_func, content)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated renderRecipes in app.js for sleek title box cards catalog!")
