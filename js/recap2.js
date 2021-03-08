//Parte A - Aquecimento Arrow Function

//Transforme as funções declarativas abaixo em Arrow Functions
const upperName = function (name) {
    return name.toUpperCase();
  };

  arrowUperName= (name2)=>name2.toUpperCase();
 console.log(arrowUperName('beto')) ;

  function myFunction(p1, p2) {
    return p1 * p2;
  }

  arrowMyFunction = (q1, q2)=>q1 * q2;
  console.log(arrowMyFunction(2,7));

  function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }
 arrowCelsius = (fahrenheit)=>((5/9)*(fahrenheit - 32))
 console.log(arrowCelsius(300)+'celsius');

  
  //Destructuring - Desestruturação
  //Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código 
  function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    return (clientX, clientY);
  }

  console.log(handleMouseMove());


// function destructuring(evento){
//     const {clientX, clientY} = evento;
//     console.log(clientX, clientY);
// }

// console.log(destructuring())
    
//   }
  

  //A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
  const obj = { first: 'Jane', last: 'Doe' };
  const {first} = obj;
  console.log(first)
  
  //A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
  company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };
  const nome = company.name;
  const objColors = [...company.products.shirts.colors, ...company.products.socks.colors] 
  console.log(nome, objColors);
  
  //Rest & Spread
  //Utilizando um operador clone o objeto c​lothes
  const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

  const clone = {...clothes}
  console.log(clone)
  
  //Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
  
  const clone2 = {...clone, colors: ['yellow', 'purple']}
  console.log(clone2)

  //Arrays e seus métodos
  //A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
  var numbers = [4, 9, 16, 25];
  
  console.log(numbers.map(Math.sqrt));

  //A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.    <======
  var numbers = [65, 44, 12, 4];
  var result = numbers.reduce( (a,b) => a * 10 );

  console.log(result);
  
  //A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
  var ages = [32, 33, 16, 40];
  const filter = ages.filter(number=>number>=18);
  console.log(filter)
  
  //A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
  data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];
  
  //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
  
  //Parte B - Hora do Jogo!
  //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
  var getShirtsColorsAmount = function (company) {
    colors = company.products.shirts.colors;
    return colors.length;
  };
  
  //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
//   const clothes = {
//     pants: { colors: ['black', 'blue'] },
//     shirts: { colors: ['white', 'red'] },
//     socks: { colors: ['beige', 'gray'] },
//   };
  
  //Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  //A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
  var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
  ];