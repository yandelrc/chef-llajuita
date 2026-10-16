const recipes = [
  {
    id: 1,
    name: "Alfajores de maizena",
    category: "Postres",
    description: "Alfajores suaves de maizena rellenos con dulce de leche y cubiertos con coco rallado.",
    searchTerms: ["alfafo", "alfafores", "alfafore", "alfajo"],
    time: "1 hora y 20 minutos aprox.",
    servings: "12 porciones",
    region: "cochabamba",
    image: "imagenes/alfafores.jfif",
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
  },
  {
    id: 2,
    name: "Pique macho",
    category: "Platos fuertes",
    description: "Tradicional plato cochabambino de carne, salchicha, papas fritas, huevo y locoto.",
    searchTerms: ["pique", "pique macho", "cochabamba", "locoto"],
    time: "50 minutos aprox.",
    servings: "4 porciones",
    region: "Cochabamba",
    image: "imagenes/pique macho.jpeg",
    ingredients: [
      "600 g de carne de res en trozos",
      "4 salchichas cortadas en rodajas",
      "4 papas grandes cortadas en bastones",
      "2 cebollas cortadas en pluma",
      "2 tomates cortados en gajos",
      "2 locotos en rodajas (ajusta al gusto)",
      "4 huevos",
      "1 cucharadita de mostaza",
      "1 cucharadita de salsa inglesa (opcional)",
      "Aceite para freír, sal y pimienta"
    ],
    steps: [
      "Fríe las papas en aceite caliente hasta que estén doradas. Escúrrelas y sazónalas con sal.",
      "Sazona la carne con sal y pimienta. En una sartén caliente con un poco de aceite, dórala por tandas para que no suelte demasiado jugo.",
      "Agrega la salchicha, la mostaza y la salsa inglesa; cocina unos minutos hasta que la salchicha se dore.",
      "Incorpora la cebolla y el tomate, y saltea brevemente para que conserven su textura. Añade el locoto con cuidado.",
      "Fríe los huevos al gusto y sirve la carne sobre las papas, coronada con los huevos."
    ],
    nutrition: [
      "Energía: 700 - 850 kcal aproximadamente",
      "Carbohidratos: 65 - 80 g",
      "Proteínas: 35 - 45 g",
      "Grasas totales: 35 - 45 g",
      "Fibra: 6 - 9 g",
      "Sodio: 900 - 1.300 mg (varía según la salchicha)"
    ]
  },
  {
    id: 3,
    name: "Sopa de maní",
    category: "Sopas",
    description: "Sopa boliviana reconfortante de maní, carne y verduras, servida con papas fritas y perejil.",
    searchTerms: ["mani", "maní", "sopa de mani", "sopa de maní", "cochabamba"],
    time: "1 hora y 30 minutos aprox.",
    servings: "6 porciones",
    region: "Bolivia; muy popular en Cochabamba",
    image: "imagenes/sopa de mani.jpg",
    ingredients: [
      "500 g de carne de res con hueso o costilla",
      "1 taza de maní crudo pelado",
      "1 cebolla picada",
      "1 zanahoria picada",
      "1/2 taza de arvejas",
      "1/2 taza de fideo corto o arroz",
      "4 papas en cubos",
      "2 litros de agua o caldo",
      "1 cucharadita de comino y 1 de orégano",
      "Perejil picado, sal y pimienta",
      "1 papa adicional cortada en bastones para freír (opcional)"
    ],
    steps: [
      "Licúa el maní con una taza de agua hasta obtener una mezcla fina. Reserva.",
      "Pon la carne y el agua o caldo en una olla. Retira la espuma al hervir y cocina hasta que la carne comience a ablandarse.",
      "Añade la cebolla, la zanahoria, las arvejas, el comino, el orégano, la sal y la pimienta. Cocina durante 10 minutos.",
      "Incorpora el maní licuado poco a poco, mezclando para que no se pegue al fondo. Cocina a fuego bajo durante 25 a 30 minutos.",
      "Agrega el fideo o arroz y las papas en cubos; continúa la cocción hasta que estén tiernos y la sopa quede cremosa.",
      "Sirve caliente con perejil y, si deseas, bastones de papa frita por encima."
    ],
    nutrition: [
      "Energía: 400 - 500 kcal aproximadamente",
      "Carbohidratos: 35 - 50 g",
      "Proteínas: 20 - 28 g",
      "Grasas totales: 18 - 25 g",
      "Fibra: 6 - 9 g",
      "Sodio: 650 - 950 mg (según el caldo y la sal)"
    ]
  },
  {
    id: 4,
    name: "Api con buñuelo",
    category: "Desayunos",
    description: "Desayuno tradicional del Altiplano: api morado caliente acompañado de buñuelo recién frito.",
    searchTerms: ["api", "buñuelo", "desayuno", "api con buñuelo", "la paz", "altiplano"],
    time: "1 hora y 30 minutos aprox. (incluye levado)",
    servings: "6 porciones",
    region: "La Paz",
    image: "imagenes/api con buñuelo.jfif",
    ingredients: [
      "Para el api: 1 taza de harina de maíz morado",
      "1,5 litros de agua",
      "1 rama de canela y 3 clavos de olor",
      "Cáscara de naranja y azúcar al gusto",
      "Para los buñuelos: 3 tazas de harina de trigo",
      "1 cucharadita de levadura seca",
      "1 huevo, 1 taza de leche tibia y 2 cucharadas de azúcar",
      "1 cucharadita de anís (opcional)",
      "Aceite para freír y miel de caña o azúcar para servir"
    ],
    steps: [
      "Para el api, disuelve la harina de maíz en una taza de agua fría. Hierve el resto del agua con la canela, los clavos y la cáscara de naranja.",
      "Agrega la harina disuelta en forma de hilo, mezclando constantemente. Cocina a fuego bajo durante 20 a 25 minutos y endulza al gusto.",
      "Para los buñuelos, mezcla la levadura con la leche tibia y el azúcar; deja reposar 5 minutos.",
      "Añade el huevo y el anís. Incorpora la harina poco a poco y amasa hasta obtener una masa suave. Tápala y deja levar en un lugar tibio durante 45 minutos.",
      "Con las manos aceitadas, forma porciones y estíralas con cuidado. Fríelas en aceite caliente, volteándolas hasta que queden doradas.",
      "Sirve el api caliente junto con los buñuelos, con miel de caña si deseas."
    ],
    nutrition: [
      "Energía: 450 - 600 kcal aproximadamente por api y buñuelo",
      "Carbohidratos: 70 - 95 g",
      "Proteínas: 8 - 12 g",
      "Grasas totales: 14 - 22 g",
      "Fibra: 3 - 6 g",
      "Azúcares: 15 - 30 g (según el endulzante)"
    ]
  },
  {
    id: 5,
    name: "Papa a la huancaína",
    category: "Platos fuertes",
    description: "Papas cocidas con una cremosa salsa de queso, leche y ají amarillo, servidas con huevo y aceitunas.",
    searchTerms: ["huancaina", "huancaína", "papa a la huancaina", "papa a la huancaína", "aji amarillo"],
    time: "40 minutos aprox.",
    servings: "4 porciones",
    region: "Origen: Huancayo, Perú; también preparada en Bolivia",
    image: "imagenes/papa a la huancaina.jfif",
    ingredients: [
      "8 papas medianas",
      "250 g de queso fresco",
      "3 ajíes amarillos sin semillas (o pasta de ají al gusto)",
      "1/2 taza de leche evaporada o leche",
      "4 galletas de soda",
      "2 cucharadas de aceite",
      "4 hojas de lechuga",
      "2 huevos cocidos",
      "8 aceitunas negras",
      "Sal al gusto"
    ],
    steps: [
      "Lava las papas y hiérvelas con cáscara en agua con sal hasta que estén tiernas. Déjalas enfriar un poco, pélalas y córtalas en rodajas.",
      "Si usas ají fresco, retira semillas y venas; hiérvelo unos minutos y escúrrelo para suavizar el picante.",
      "Licúa el queso, el ají, la leche, las galletas y el aceite hasta obtener una salsa cremosa. Añade leche poco a poco si queda muy espesa y ajusta la sal.",
      "Coloca las hojas de lechuga en cada plato y acomoda encima las papas.",
      "Cubre con la salsa y sirve con huevo cocido y aceitunas."
    ],
    nutrition: [
      "Energía: 350 - 450 kcal aproximadamente",
      "Carbohidratos: 45 - 60 g",
      "Proteínas: 12 - 18 g",
      "Grasas totales: 14 - 22 g",
      "Fibra: 5 - 8 g",
      "Sodio: 500 - 800 mg (según el queso y las aceitunas)"
    ]
  },
  {
    id: 6,
    name: "Fresco de quiza",
    category: "Bebidas",
    description: "Bebida casera refrescante preparada con quinua cocida, canela y un toque de limón.",
    searchTerms: ["quiza", "quisá", "quinua", "quinoa", "fresco de quiza"],
    time: "45 minutos aprox. más enfriado",
    servings: "6 vasos",
    region: "bolivia",
    image: "imagenes/fresco de quiza.jfif",
    ingredients: [
      "1 taza de quinua bien lavada",
      "2 litros de agua",
      "1 rama de canela",
      "2 clavos de olor (opcional)",
      "Jugo de 1 limón",
      "Azúcar o miel al gusto",
      "Hielo para servir"
    ],
    steps: [
      "Enjuaga la quinua varias veces, frotándola suavemente hasta que el agua salga clara.",
      "Hierve la quinua en un litro de agua junto con la canela y los clavos durante 25 a 30 minutos, hasta que los granos estén suaves.",
      "Retira la canela y los clavos. Deja enfriar y licúa la quinua con parte del líquido de cocción.",
      "Cuela si prefieres una bebida más ligera y mezcla con el resto del agua.",
      "Añade el jugo de limón y endulza al gusto. Refrigera y sirve con hielo."
    ],
    nutrition: [
      "Energía: 100 - 160 kcal aproximadamente por vaso",
      "Carbohidratos: 20 - 32 g",
      "Proteínas: 2 - 4 g",
      "Grasas totales: 1 - 2 g",
      "Fibra: 1 - 3 g",
      "Azúcares: depende de la cantidad añadida"
    ]
  },
  {
    id: 7,
    name: "Ensalada de verdolaga",
    category: "Ensaladas",
    description: "Ensalada fresca de verdolaga con tomate, cebolla y limón, sencilla y llena de sabor.",
    searchTerms: ["verdolaga", "ensalada de verdolaga", "ensalada", "verdura"],
    time: "15 minutos aprox.",
    servings: "4 porciones",
    region: "Preparación casera presente en Bolivia; sin una provincia de origen única",
    image: "imagenes/ensalada-de-verdolaga.jpg",
    ingredients: [
      "2 tazas de hojas y tallos tiernos de verdolaga",
      "2 tomates medianos cortados en cubos",
      "1/2 cebolla morada cortada en pluma fina",
      "Jugo de 1 limón",
      "2 cucharadas de aceite",
      "Sal y pimienta al gusto",
      "Queso fresco desmenuzado (opcional)"
    ],
    steps: [
      "Separa las hojas y tallos tiernos de verdolaga; lávalos cuidadosamente bajo agua corriente y escúrrelos.",
      "Corta los tomates en cubos y la cebolla en pluma fina. Si prefieres un sabor más suave, enjuaga la cebolla con agua fría.",
      "Coloca la verdolaga, el tomate y la cebolla en una ensaladera.",
      "Aliña con jugo de limón, aceite, sal y pimienta justo antes de servir.",
      "Mezcla suavemente y, si deseas, agrega queso fresco desmenuzado."
    ],
    nutrition: [
      "Energía: 60 - 100 kcal aproximadamente",
      "Carbohidratos: 7 - 12 g",
      "Proteínas: 2 - 5 g",
      "Grasas totales: 3 - 6 g",
      "Fibra: 2 - 4 g",
      "Sodio: varía según la sal y el queso añadido"
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
          src="${recipe.image}"
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