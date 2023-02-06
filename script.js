console.log("probando")


// Sintaxis reducida

// const sayHello = (name) => {
//   return `Hola ${name}`
// }

const sayHello = (name) => `Hola ${name}`
// const sayHello = name => `Hola ${name}` // cuando hay un parametro, los parentesis son opcionales

console.log( sayHello("Bob") )


const oneArr = [1, "hola", true, []];

// filtrar del array solo los valores de tipo numero

// const filteredArr = oneArr.filter((elem) => {
//   return typeof elem === "number"
// })

const filteredArr = oneArr.filter((elem) => typeof elem === "number")

console.log(filteredArr)


const namesArr = ["mario", "juanje", "araceli", "david", "cristina", "jose"]

// solo los elementos que empiecen por "j"
// mostrar los elementos capitalizados

const filteredNames = namesArr
.filter((eachName) => eachName[0] === "j") // crea nuevo array con elementos que pasen la condicion
.map((eachName) => eachName[0].toUpperCase() + eachName.slice(1)) // crea nuevo array con los valores retornados

console.log(filteredNames)
// const capitalized = filteredNames
// console.log(capitalized)



// Objetos

let username = "Bob";
let age = 46;

// const user = {
//   username: username,
//   age: age,
// }

// cuando el nombre de la propiedad es el mismo que el nombre de la variable de donde viene el valor
const user = {
  username,
  age,
  loc: "Spain",
}

console.log(user)



// destructuring. 100% opcional! nunca es algo requerido. Lo usamos para evitar redundancia.

const oneDog = {
  name: "Phantom",
  dogAge: 10,
  color: "black",
}


// console.log(`${oneDog.name} es un perrito de color ${oneDog.color} y tiene ${oneDog.dogAge} añitos`)
// console.log(`${oneDog.name} es el mejor perrito del mundo`)

// destructurar las propiedades de oneDog
// const { propiedades } = objeto
const { name, dogAge, color } = oneDog
// JS crea variables con los valores de las propiedades del obj

oneDog.rating = "10";

const { rating } = oneDog

// oneDog.name = "bob"

// console.log(`${name} es un perrito de color ${color} y tiene ${dogAge} añitos`)
// console.log(`${name} es el mejor perrito del mundo, ${rating}/10`)


function describeDog({color, dogAge, rating, name}) {

  // const {color, dogAge, rating, name} = theDog

  console.log(`${name} es un perrito de color ${color} y tiene ${dogAge} añitos`)
  console.log(`${name} es el mejor perrito del mundo, ${rating}/10`)

}

describeDog(oneDog)


// destructuracion en arrays con []


const myTopFiveFavouriteBooks = ["Dresden Files", "Locke and Key", "Lord of the Rings", "Harry Potter", "Dragonlance"];

// console.log( `Mis libros favoritos son: ${myTopFiveFavouriteBooks[0]}, ${myTopFiveFavouriteBooks[1]}, ${myTopFiveFavouriteBooks[2]}, ${myTopFiveFavouriteBooks[3]} y ${myTopFiveFavouriteBooks[4]}` )


// cuando destructuramos de array, le damos nombre a las variables creadas al momento de la destr.
const [book1, book2, book3, book4, book5] = myTopFiveFavouriteBooks;

console.log( `Mis libros favoritos son: ${book1}, ${book2}, ${book3}, ${book4} y ${book5}` )



// destructuración compleja

const videogame = {
  gameName: "Hogwarts Legacy",
  company: "Avalanche",
  releaseDate: "10/02/23",
  dev: {
    gameEngine: {
      engineName: "Unreal",
    }
  }
}

const { gameName, company, releaseDate = "No hay fecha de salida" } = videogame;
// asignar valores predeterminados
// si releaseDate existe. el valor es el de propiedad
// si releaseDate no existe. entonces es "No hay fecha de salida"
console.log(`${gameName}. Dessarrollado por: ${company}. Fecha de salida: ${releaseDate}`)


const { dev: { gameEngine: { engineName } } } = videogame

console.log(engineName)
console.log(videogame.dev.gameEngine.engineName)




const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
};


// const { firstName, lastName } = data.name;
const { name: { firstName, lastName }, favoriteFootballTeam, hometown: { city, country }  } = data;



// Operadores Spread y Rest

// SPREAD => Esparcir. => ...

const arrNum = [ 4, 8, 15, 16, 23, 42 ];

console.log(...arrNum)
console.log( 4, 8, 15, 16, 23, 42 )

// 1. para usar en metodos que requieren valores esparcidos

console.log( Math.max(7, 10, 24) )

console.log( Math.max( ...arrNum )) // esparcimos todos los elementos del arr

console.log( Math.min( ...arrNum ))


// 2. concatenar arrays
const students = ["Dagmara", "Patricio", "Pilar"];
const staff = ["Carolina", "Adria"]

// nuevo arr con todos los elementos
// console.log(students + staff)

const everyone = [ ...students, ...staff, "Jose Luis", "Alvaro" ]
console.log(everyone)

// 3. clonar arrays
const originalArr = [ 4, 8, 15, 16, 23, 42 ];

const clone = [...originalArr]

console.log(clone.reverse())
console.log(originalArr)


const somePeople = [
  {
    name: "Carolina", 
    candy: 20,
  }, // ref abcd
  {
    name: "Adria", 
    candy: 22,
  }, // ref xywe
  {
    name: "Jorge", 
    candy: 10,
  } // ref qwer
] // ref. 1234

// const clonePeople = [...somePeople] // shallow clone (superficial)
const clonePeople = structuredClone(somePeople) // deep clone (profundo)

clonePeople.pop()
console.log(clonePeople)
console.log(somePeople)

clonePeople[0].candy = 1000; // ref abcd
console.log(clonePeople)
console.log(somePeople)


// SHALLOW CLONE => solo clona la referencia del primer nivel del array/obj
// 1. operador Spread
// 2. .map()

// DEEP CLONE => Clonan TODOS los niveles del arr/obj
// 1. estructuredClone()
// 1. json parse & json stringify

// Operador Rest => El resto de... => ...

const hobbies = ["surfear", "cocinar", "leer", "jugar videojuegos"];

const [ firstHobby, secondHobby, ...otherHobbies ] = hobbies
//                                      |
//                agrupar todos los demas elementos que no hayan sido destructurados
console.log(firstHobby)
console.log(secondHobby)

console.log(otherHobbies)


// crear funcion que sume los valores que pase como argumento y verifique si el resultado es 10.

function checkIfSumIsTen(...allNumbers) {
  //                            |
  //          crear un arr, con todos los argumentos restantes
  console.log(allNumbers)

  const sum = allNumbers.reduce((acc, elem) => acc + elem, 0)

  if (sum === 10) {
    return `Es exactamente 10`
  } else if (sum < 10) {
    return `aun no has llegado a 10`
  } else {
    return `te has pasado de 10`
  }

}

console.log( checkIfSumIsTen(5, 3, 2) )