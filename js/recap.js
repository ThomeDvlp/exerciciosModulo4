//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];
const array2 = [...array];

const soma = array2.reduce((ini, soma) => (ini += soma));

console.log(soma);

//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

// const response = assync (fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'))

async function fetchText() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772');


    if (response.status === 200) {
        let data = await response.json();
        let resultado = {
            nome : `${data.meals[0].strMeal}`,
            ID : `${data.meals[0].idMeal}`,
            Região : `${data.meals[0].strArea}`,
            Ingredientes : `${data.meals[0].strIngredient1}`,
            Instruções : `${data.meals[0].strInstructions}`
        }
        
        console.log(resultado);
        
    }
}

fetchText();

//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados

async function fetchSeafood() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');


    if (response.status === 200) {
        let data = await response.json();
        let resultado = [
            data.meals[0],
            data.meals[1],
            data.meals[2],
            data.meals[3],
            data.meals[4],
            data.meals[5],
            data.meals[6],
            data.meals[7],
            data.meals[8],
            data.meals[9]
        ]
        
        
        console.log(resultado);
        
    }
}

fetchSeafood();