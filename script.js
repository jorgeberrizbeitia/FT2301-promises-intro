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