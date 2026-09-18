const recipes = [
  {
    id: 1,
    name: "Alfajores de maizena",
    category: "Postres",
    description: "Alfajores suaves de maizena rellenos con dulce de leche y cubiertos con coco rallado.",
    searchTerms: ["alfafo", "alfafores", "alfafore", "alfajo"],
    time: "1 hora y 20 minutos aprox.",
    servings: "12 porciones",
    region: "Bolivia",
    image: "https://yandelrc.github.io/chef-llajuita/imagenes/imagen.png?v=2501761",
    ingredients: [
      "2 tazas de maicena (almidón de maíz)",
      "1 taza de harina de trigo cernida",
      "5 cucharadas de mantequilla o margarina a temperatura ambiente",
      "3/4 taza de azúcar molida o impalpable",
      "4 huevos, o 3 yemas y 1 huevo entero para que queden más suaves",
      "3 cucharaditas de polvo de hornear",
      "Ralladura de 1/2 limón",
      "1 cucharadita de esencia de vainilla",
      "1 lata o taza de dulce de leche (manjar)",
      "1/2 taza de coco rallado"
    ],
    steps: [
      "Acremar la base: bate enérgicamente la mantequilla con el azúcar molida hasta obtener una consistencia cremosa, suave y blanquecina.",
      "Agregar los húmedos: añade los huevos o yemas, la esencia de vainilla y la ralladura de limón. Bate hasta integrar por completo.",
      "Incorporar los secos: tamiza la maicena, la harina y el polvo de hornear. Agrégalos poco a poco y une sin amasar en exceso, hasta formar una masa suave que no se pegue a los dedos.",
      "Reposo: envuelve la masa en papel film y refrigérala durante 30 a 45 minutos.",
      "Estirar y cortar: espolvorea harina en la mesa, estira la masa hasta dejarla de 1/2 centímetro y corta círculos con un molde o vaso pequeño.",
      "Horneado: coloca las tapitas en una bandeja enmantecada y hornea a 160 °C - 180 °C durante 12 a 15 minutos. Deben quedar blancas arriba y apenas doradas en la base. Deja enfriar por completo.",
      "Armado: unta una tapita con dulce de leche, coloca otra encima y presiona suavemente. Finalmente, rueda los bordes por el coco rallado para que se adhiera al dulce de leche."
    ],
    nutrition: [
      "Calorías: 220 a 250 kcal aproximadamente",
      "Carbohidratos: 32 - 35 g",
      "Grasas totales: 8 - 10 g",
      "Grasas saturadas: 4.5 g",
      "Proteínas: 3 - 4 g",
      "Fibra: 0.5 g"
    ]
  }
];


const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
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
      recipe.searchTerms.some(term =>
        normalize(term).includes(search) || search.includes(normalize(term))
      ) ||
      recipe.ingredients.some(ingredient =>
        normalize(ingredient).includes(search)
      );

    return categoryMatches && searchMatches;

  });
}


function renderRecipes() {

  const filtered = getFilteredRecipes();

    recipeGrid.innerHTML = filtered.map(recipe => `

    <article class="recipe-card">

      <div class="recipe-image">
        <img
          src="https://yandelrc.github.io/chef-llajuita/imagenes/imagen.png?v=2501761"
          alt="${recipe.name}"
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
    `${ filtered.length } receta${ filtered.length === 1 ? "" : "s" }`;


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
        .map(item => `<li>${item}</li>`)
      .join("");


  document.getElementById("modalSteps").innerHTML =
    recipe.steps
        .map(step => `<li>${step}</li>`)
      .join("");


  document.getElementById("modalNutrition").innerHTML =
    recipe.nutrition
      .map(item => `<li>${item}</li>`)
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

    document
      .getElementById("recetas")
      .scrollIntoView({ behavior: "smooth", block: "start" });
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


searchForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    document
      .getElementById("recetas")
      .scrollIntoView({ behavior: "smooth" });

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