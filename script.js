// ==========================================
// 1. DATA COLLECTION (COMPLETED RECIPES ARRAY)
// ==========================================
const sampleRecipes = [
  {
    id: "1",
    title: "Classic Grilled Beef Steak",
    category: "Beef",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    description:
      "Juicy, tender ribeye steak seared to perfection with garlic butter, rosemary, and thyme.",
    ingredients: [
      "2 Ribeye Steaks (1 inch thick)",
      "3 cloves Garlic (crushed)",
      "2 sprigs Fresh Rosemary",
      "2 tbsp Butter",
      "1 tbsp Olive Oil",
      "Coarse Salt & Black Pepper",
    ],
    instructions: [
      "Bring steaks to room temperature and season generously with salt and pepper.",
      "Heat olive oil in a heavy skillet over high heat until smoking.",
      "Sear steaks for 2-3 minutes per side to form a golden-brown crust.",
      "Reduce heat slightly, add butter, garlic, and rosemary to the pan.",
      "Spoon melted butter over the steaks continually for 2 more minutes.",
      "Rest for 5 minutes before slicing to lock in juices.",
    ],
  },
  {
    id: "2",
    title: "Creamy Garlic Parmesan Chicken",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    description:
      "Tender chicken breasts simmered in a rich garlic, spinach, and heavy cream parmesan sauce.",
    ingredients: [
      "2 Chicken Breasts (halved)",
      "1/2 cup Grated Parmesan",
      "1 cup Heavy Cream",
      "3 cloves Garlic (minced)",
      "2 cups Fresh Spinach",
      "1 tbsp Olive Oil",
    ],
    instructions: [
      "Season chicken with salt, pepper, and garlic powder.",
      "Heat oil in a skillet and cook chicken until golden and cooked through, then remove.",
      "In the same pan, sauté minced garlic for 1 minute until fragrant.",
      "Pour in heavy cream and bring to a simmer, then stir in parmesan until smooth.",
      "Add spinach and let it wilt into the sauce.",
      "Return chicken to the pan, spooning sauce over it before serving.",
    ],
  },
  {
    id: "3",
    title: "Fresh Mediterranean Avocado Salad",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    description:
      "A crisp, refreshing mix of cucumbers, cherry tomatoes, olives, feta, and perfectly ripe avocado.",
    ingredients: [
      "2 Ripe Avocados (cubed)",
      "1 cup Cherry Tomatoes (halved)",
      "1 Large Cucumber (sliced)",
      "1/2 cup Feta Cheese (crumbled)",
      "1/4 cup Kalamata Olives",
      "Lemon Juice & Olive Oil Dressing",
    ],
    instructions: [
      "Chop tomatoes, cucumbers, and olives, then place them into a mixing bowl.",
      "Carefully slice and cube the avocados, adding them gently to avoid mashing.",
      "Drizzle with fresh lemon juice and extra virgin olive oil.",
      "Toss everything together lightly.",
      "Top with crumbled feta cheese and a pinch of dried oregano.",
    ],
  },
  {
    id: "4",
    title: "Decadent Chocolate Lava Cake",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    description:
      "Rich chocolate cake with a warm, gooey, molten chocolate center. Served best with vanilla ice cream.",
    ingredients: [
      "100g High Quality Dark Chocolate",
      "1/2 cup Butter",
      "2 Whole Eggs + 2 Egg Yolks",
      "1/4 cup Sugar",
      "2 tbsp Flour",
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and grease small baking ramekins.",
      "Melt dark chocolate and butter together in a bowl until glossy.",
      "Whisk eggs, yolks, and sugar together in a separate bowl until thick.",
      "Fold melted chocolate and flour gently into the egg mixture.",
      "Pour batter into ramekins and bake for 12 minutes until edges are firm but center jiggles.",
      "Invert onto a plate immediately and serve hot.",
    ],
  },
  {
    id: "5",
    title: "Crispy Honey Garlic Chicken Wings",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    description:
      "Sweet and sticky chicken wings baked to crispy perfection and coated in a honey garlic glaze.",
    ingredients: [
      "1kg Chicken Wings",
      "4 cloves Garlic (minced)",
      "1/3 cup Honey",
      "2 tbsp Soy Sauce",
      "1 tbsp Olive Oil",
      "Salt & Pepper to taste",
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and line a baking sheet.",
      "Toss wings in olive oil, salt, and pepper, then lay out in a single layer.",
      "Bake wings for 45-50 minutes, flipping halfway until crispy brown.",
      "In a small saucepan, simmer honey, garlic, and soy sauce for 5 minutes until thickened.",
      "Toss the baked crispy wings inside the sauce bowl until fully glazed and sticky.",
      "Serve hot garnished with sesame seeds if desired.",
    ],
  },
  {
    id: "6",
    title: "Gourmet Vegetarian Mushroom Risotto",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80",
    description:
      "Creamy Arborio rice slowly cooked with earthy wild mushrooms, white wine, and aged parmesan.",
    ingredients: [
      "1.5 cups Arborio Rice",
      "4 cups Vegetable Broth (warm)",
      "2 cups Mixed Mushrooms (sliced)",
      "1 Small Onion (diced)",
      "1/2 cup Dry White Wine",
      "2 tbsp Butter & 1/2 cup Parmesan",
    ],
    instructions: [
      "Sauté onions and wild mushrooms in olive oil until golden brown, then set aside.",
      "In the same pan, toast the Arborio rice dry for 2 minutes.",
      "Pour in white wine, stirring continually until the liquid is fully absorbed.",
      "Add warm vegetable broth one ladle at a time, letting the rice absorb it before adding more.",
      "Continue adding broth and stirring for 20 minutes until rice is rich and creamy.",
      "Stir back in the mushrooms, butter, and parmesan cheese just before serving.",
    ],
  },
];

// ==========================================
// 2. DISPLAY RENDERING ENGINE
// ==========================================
function displayRecipes(recipesArray) {
  const recipeGrid = document.getElementById("recipe-display");

  if (!recipeGrid) {
    console.error(
      "❌ Error: Target container '#recipe-display' was not found in the DOM.",
    );
    return;
  }

  recipeGrid.innerHTML = "";

  if (recipesArray.length === 0) {
    recipeGrid.innerHTML = `<p class="loading-placeholder">No recipes found matching your criteria.</p>`;
    return;
  }

  const cardsHTML = recipesArray
    .map((recipe) => {
      return `
            <article class="recipe-card" data-id="${recipe.id}">
                <div class="card-image-wrap">
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <span class="card-badge">${recipe.category}</span>
                </div>
                <div class="card-body">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <button class="view-btn open-modal-trigger" data-id="${recipe.id}">View Recipe</button>
                </div>
            </article>
        `;
    })
    .join("");

  recipeGrid.innerHTML = cardsHTML;

  // Always bind modal popup triggers right after building cards into the window
  setupModalTriggers();
}

// ==========================================
// 3. RECIPE MODAL DETAIL INTERACTION HOOKS
// ==========================================
function openModal(recipeId) {
  const modal = document.getElementById("recipe-modal");
  const contentTarget = document.getElementById("modal-content-target");

  const recipe = sampleRecipes.find((r) => r.id === recipeId);

  if (!recipe || !modal || !contentTarget) return;

  const ingredientsHTML = recipe.ingredients
    .map((ing) => `<li>${ing}</li>`)
    .join("");
  const instructionsHTML = recipe.instructions
    .map((step) => `<li>${step}</li>`)
    .join("");

  contentTarget.innerHTML = `
        <img class="modal-header-img" src="${recipe.image}" alt="${recipe.title}">
        <span class="modal-meta-tag">${recipe.category}</span>
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        
        <h3 class="modal-section-title">Ingredients You'll Need</h3>
        <ul class="ingredients-list">${ingredientsHTML}</ul>
        
        <h3 class="modal-section-title">Step-by-Step Instructions</h3>
        <ol class="instructions-steps">${instructionsHTML}</ol>
    `;

  modal.classList.add("open");
}

function closeModal() {
  const modal = document.getElementById("recipe-modal");
  if (modal) modal.classList.remove("open");
}

function setupModalTriggers() {
  const modalButtons = document.querySelectorAll(".open-modal-trigger");
  modalButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const recipeId = e.currentTarget.getAttribute("data-id");
      openModal(recipeId);
    });
  });
}

// ==========================================
// 4. SEARCH & INPUT QUERIES CONTROLLER
// ==========================================
function handleSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  const query = searchInput.value.toLowerCase().trim();
  console.log(`🔍 Searching for: "${query}"`);

  // Reset all filter buttons back to active status on "All Recipes"
  const filterButtons = document.querySelectorAll(
    ".category-filters .filter-btn",
  );
  filterButtons.forEach((btn) => {
    if (btn.getAttribute("data-category") === "all")
      btn.classList.add("active");
    else btn.classList.remove("active");
  });

  const filteredRecipes = sampleRecipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.category.toLowerCase().includes(query)
    );
  });

  displayRecipes(filteredRecipes);
}

// ==========================================
// 5. UNIFIED INITIALIZATION LIFECYCLE
// ==========================================
function initApplication() {
  console.log("🍳 GourmetBook Framework Initialized Successfully.");

  // 1. Initial Data Mount
  displayRecipes(sampleRecipes);

  // 2. Setup Search Controls
  const searchBtn = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");

  if (searchBtn) searchBtn.addEventListener("click", handleSearch);
  if (searchInput) {
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") handleSearch();
    });
  }

  // 3. Setup Category Pill Controls
  const filterButtons = document.querySelectorAll(
    ".category-filters .filter-btn",
  );
  filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      event.currentTarget.classList.add("active");

      const selectedCategory =
        event.currentTarget.getAttribute("data-category");
      if (searchInput) searchInput.value = ""; // Clear text values to prevent logic conflicts

      if (selectedCategory === "all") {
        displayRecipes(sampleRecipes);
      } else {
        const filtered = sampleRecipes.filter(
          (recipe) =>
            recipe.category.toLowerCase() === selectedCategory.toLowerCase(),
        );
        displayRecipes(filtered);
      }
    });
  });

  // 4. Setup Global Modal Closing Events
  const closeBtn = document.getElementById("modal-close-btn");
  const modalOverlay = document.getElementById("recipe-modal");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

// ==========================================
// 6. SINGLE APP SECURE BOOTSTRAPPING
// ==========================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApplication);
} else {
  initApplication();
}
