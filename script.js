
const sampleRecipes = [
    {
        id: "1",
        title: "Classic Grilled Beef Steak",
        category: "Beef",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        description: "Juicy, tender ribeye steak seared to perfection with garlic butter, rosemary, and thyme."
    },
    {
        id: "2",
        title: "Creamy Garlic Parmesan Chicken",
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
        description: "Tender chicken breasts simmered in a rich garlic, spinach, and heavy cream parmesan sauce."
    },
    {
        id: "3",
        title: "Fresh Mediterranean Avocado Salad",
        category: "Vegetarian",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        description: "A crisp, refreshing mix of cucumbers, cherry tomatoes, olives, feta, and perfectly ripe avocado."
    },
    {
        id: "4",
        title: "Decadent Chocolate Lava Cake",
        category: "Dessert",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        description: "Rich chocolate cake with a warm, gooey, molten chocolate center. Served best with vanilla ice cream."
    },
    {
        id: "5",
        title: "Crispy Honey Garlic Chicken Wings",
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
        description: "Sweet and sticky chicken wings baked to crispy perfection and coated in a honey garlic glaze."
    },
    {
        id: "6",
        title: "Gourmet Vegetarian Mushroom Risotto",
        category: "Vegetarian",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80",
        description: "Creamy Arborio rice slowly cooked with earthy wild mushrooms, white wine, and aged parmesan."
    }
];

// ==========================================
// 2. DISPLAY RENDERING ENGINE
// ==========================================
function displayRecipes(recipesArray) {
    const recipeGrid = document.getElementById('recipe-display');
    
    // Safety check: Does the element exist in the HTML right now?
    if (!recipeGrid) {
        console.error("❌ Error: Target container '#recipe-display' was not found in the DOM.");
        return;
    }

    // Clear existing inner html cleanly
    recipeGrid.innerHTML = "";

    if (recipesArray.length === 0) {
        recipeGrid.innerHTML = `<p class="loading-placeholder">No recipes found matching your criteria.</p>`;
        return;
    }

    // Build grid structure using a single map join for maximum execution safety
    const cardsHTML = recipesArray.map(recipe => {
        return `
            <article class="recipe-card" data-id="${recipe.id}">
                <div class="card-image-wrap">
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <span class="card-badge">${recipe.category}</span>
                </div>
                <div class="card-body">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <a href="#" class="view-btn">View Recipe</a>
                </div>
            </article>
        `;
    }).join(''); // Connect all rows neatly into one string

    recipeGrid.innerHTML = cardsHTML;
    console.log(`✅ Render Engine Success: Mounted ${recipesArray.length} items.`);
}

// ==========================================
// 3. SECURE APP BOOTSTRAP
// ==========================================
// If the script runs before the window finishes painting, we execute both catch listeners
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => displayRecipes(sampleRecipes));
} else {
    // DOM is already fully ready, execute immediately
    displayRecipes(sampleRecipes);
}