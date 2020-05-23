function wakeDog (dogName, dogBreed) {
    let infoString = `Wake ${dogName} the ${dogBreed}`
    console.log(infoString)
    return infoString
}

function leashDog (dogName, dogBreed) {
    let infoString = `Leash ${dogName} the ${dogBreed}`
    console.log(infoString)
    return infoString
}

function walkToPark (dogName, dogBreed) {
    let infoString = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(infoString)
    return infoString
}

function throwFrisbee (dogName, dogBreed) {
    let infoString = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(infoString)
    return infoString
}

function walkHome (dogName, dogBreed) {
    let infoString = `Walk home with ${dogName} the ${dogBreed}`
    console.log(infoString)
    return infoString
}

function unleashDog (dogName, dogBreed) {
    let infoString = `Unleash ${dogName} the ${dogBreed}`
    console.log(infoString)
    return infoString
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog (dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}