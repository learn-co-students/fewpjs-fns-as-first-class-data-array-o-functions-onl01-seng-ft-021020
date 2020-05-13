function wakeDog(name, breed) {
  let message = `Wake ${name} the ${breed}`
  console.log(message)
  return message
}

function leashDog(name, breed) {
  let message = `Leash ${name} the ${breed}`
  console.log(message)
  return message
}

function walkToPark(name, breed) {
  let message = `Walk to the park with ${name} the ${breed}`
  console.log(message)
  return message
}

function throwFrisbee(name, breed) {
  let message = `Throw the frisbee for ${name} the ${breed}`
  console.log(message)
  return message
}

function walkHome(name, breed) {
  let message = `Walk home with ${name} the ${breed}`
  console.log(message)
  return message
}

function unleashDog(name, breed) {
  let message = `Unleash ${name} the ${breed}`
  console.log(message)
  return message
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed) {
  let newArr = routine.map( x => x(name, breed));
  return newArr
}
