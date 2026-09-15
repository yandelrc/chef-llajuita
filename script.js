
const recipes = [
  {
    id: 1,
    name: "Papa a la huancaína",
    category: "Ensaladas",
    description: "Papas cocidas acompañadas de una cremosa salsa de ají amarillo y queso.",
    time: "30 min",
    servings: "4 porciones",
    region: "Bolivia",
    image: "imagen",
    ingredients: [
      "1 kg de papas",
      "4 ajíes amarillos",
      "200 g de queso fresco",
      "1/2 taza de leche evaporada",
      "4 galletas saladas",
      "Aceite, sal y pimienta al gusto"
    ],
    steps: [
      "Lava y cocina las papas hasta que estén suaves. Déjalas enfriar y córtalas en rodajas.",
      "Limpia los ajíes y licúalos con el queso, la leche, las galletas y un poco de aceite.",
      "Procesa hasta obtener una salsa cremosa y rectifica la sal.",
      "Sirve las papas con la salsa por encima y presenta el plato."
    ]
  },

  {
    id: 2,
    name: "Silpancho",
    category: "Platos fuertes",
    description: "Plato tradicional cochabambino con carne apanada, arroz, papa, huevo y sarsa.",
    time: "45 min",
    servings: "4 porciones",
    region: "Cochabamba",
    image: "imagen",
    ingredients: [
      "500 g de carne de res magra",
      "2 tazas de pan molido",
      "4 huevos",
      "4 papas medianas",
      "2 tazas de arroz blanco",
      "2 tomates maduros",
      "1 cebolla morada",
      "1 locoto verde",
      "Sal, pimienta y comino al gusto"
    ],
    steps: [
      "Corta la carne en cuatro filetes, agrega sal, pimienta y comino. Cubre con pan molido y aplánala hasta que quede delgada.",
      "Cocina las papas, córtalas y dóralas en una sartén con aceite caliente.",
      "Fríe la carne aplanada durante 1 a 2 minutos por lado. Luego prepara los huevos fritos.",
      "Prepara la sarsa con tomate, cebolla y locoto. Sirve el arroz, las papas, la carne, el huevo y finalmente la sarsa."
    ]
  },

  {
    id: 3,
    name: "Salteña",
    category: "Platos fuertes",
    description: "Empanada boliviana horneada con masa dorada y un tradicional relleno jugoso.",
    time: "90 min",
    servings: "10 unidades",
    region: "Bolivia",
    image: "imagen",
    ingredients: [
      "Harina de trigo",
      "Manteca",
      "Carne de res o pollo",
      "Papa",
      "Arvejas",
      "Huevo cocido",
      "Ají colorado",
      "Caldo y condimentos"
    ],
    steps: [
      "Prepara la masa mezclando harina, manteca y los ingredientes líquidos hasta obtener una masa uniforme.",
      "Cocina el relleno con carne, papa, arvejas, ají y caldo hasta obtener un jigote espeso.",
      "Arma cada salteña colocando el relleno en un disco de masa y cerrando con repulgue.",
      "Hornea hasta que la masa esté dorada. Sirve calientes."
    ]
  },

  {
    id: 4,
    name: "Somó",
    category: "Bebidas",
    description: "Bebida tradicional boliviana preparada a base de maíz, refrescante y nutritiva.",
    time: "60 min",
    servings: "6 vasos",
    region: "Oriente boliviano",
    image: "imagen",
    ingredients: [
      "1 taza de maíz pelado",
      "2 litros de agua",
      "Canela al gusto",
      "Clavo de olor al gusto",
      "Azúcar al gusto"
    ],
    steps: [
      "Lava el maíz y déjalo en remojo si es necesario.",
      "Cocina el maíz en abundante agua hasta que los granos estén suaves.",
      "Agrega canela y clavo de olor y continúa la cocción para aromatizar.",
      "Deja enfriar, endulza al gusto y sirve bien frío."
    ]
  }
];


const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const recipeCount = document.getElementById("recipeCount");
const emptyState = document.getElementById("emptyState");
const resetButton = document.getElementById("resetButton");
const modal = document.getElementById("recipeModal");


let selectedCategory = "Todas";
let searchText = "";


function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


function getFilteredRecipes() {

  const search = normalize(searchText);

  return recipes.filter(recipe => {

    const categoryMatches =
      selectedCategory === "Todas" ||
      recipe.category === selectedCategory;

    const searchMatches =
      !search ||
      normalize(recipe.name).includes(search) ||
      normalize(recipe.description).includes(search) ||
      normalize(recipe.category).includes(search) ||
      normalize(recipe.region).includes(search) ||
      recipe.ingredients.some(ingredient =>
        normalize(ingredient).includes(search)
      );

    return categoryMatches && searchMatches;

  });
}


function renderRecipes() {

  const filtered = getFilteredRecipes();

  recipeGrid.innerHTML = filtered.map(recipe => `

    < article class="recipe-card" >

      <div class="recipe-image">

        <img
          src="${recipe.image}"
          alt="${recipe.name}"
          loading="lazy"
        >

      </div>


      <div class="recipe-body">

        <span class="recipe-tag">
          ${recipe.category}
        </span>

        <h3>${recipe.name}</h3>

        <p>${recipe.description}</p>


        <div class="recipe-meta">

          <span>
            ⏱ ${recipe.time}
          </span>

          <span>
            👥 ${recipe.servings}
          </span>

        </div>


        <button
          class="recipe-button"
          type="button"
          data-recipe="${recipe.id}">
          Ver receta
        </button>

      </div>

    </article >

    `).join("");


  recipeCount.textContent =
    `${ filtered.length } receta${ filtered.length === 1 ? "" : "s" } `;


  emptyState.classList.toggle(
    "hidden",
    filtered.length !== 0
  );
}


function openRecipe(id) {

  const recipe = recipes.find(
    item => item.id === Number(id)
  );

  if (!recipe) return;


  document.getElementById("modalImage").src =
    recipe.image;

  document.getElementById("modalImage").alt =
    recipe.name;

  document.getElementById("modalCategory").textContent =
    recipe.category;

  document.getElementById("modalTitle").textContent =
    recipe.name;

  document.getElementById("modalDescription").textContent =
    recipe.description;

  document.getElementById("modalTime").textContent =
    recipe.time;

  document.getElementById("modalServings").textContent =
    recipe.servings;

  document.getElementById("modalRegion").textContent =
    recipe.region;


  document.getElementById("modalIngredients").innerHTML =
    recipe.ingredients
      .map(item => `< li > ${ item }</li >`)
      .join("");


  document.getElementById("modalSteps").innerHTML =
    recipe.steps
      .map(step => `< li > ${ step }</li >`)
      .join("");


  modal.classList.remove("hidden");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow = "hidden";
}


function closeRecipe() {

  modal.classList.add("hidden");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";
}


document.addEventListener("click", event => {

  const recipeButton =
    event.target.closest("[data-recipe]");

  const categoryButton =
    event.target.closest("[data-category]");

  const closeButton =
    event.target.closest("[data-close]");


  if (recipeButton) {
    openRecipe(
      recipeButton.dataset.recipe
    );
  }


  if (categoryButton) {

    selectedCategory =
      categoryButton.dataset.category;


    document
      .querySelectorAll(".category-card")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.category === selectedCategory
        );

      });


    renderRecipes();
  }


  if (closeButton) {
    closeRecipe();
  }

});


searchInput.addEventListener(
  "input",
  event => {

    searchText =
      event.target.value;

    renderRecipes();

  }
);


clearSearch.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    searchText = "";

    renderRecipes();

    searchInput.focus();

  }
);


resetButton.addEventListener(
  "click",
  () => {

    selectedCategory = "Todas";

    searchText = "";

    searchInput.value = "";


    document
      .querySelectorAll(".category-card")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.category === "Todas"
        );

      });


    renderRecipes();

  }
);


document
  .getElementById("closeRecipeButton")
  .addEventListener(
    "click",
    closeRecipe
  );


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      !modal.classList.contains("hidden")
    ) {
      closeRecipe();
    }

  }
);


renderRecipes();