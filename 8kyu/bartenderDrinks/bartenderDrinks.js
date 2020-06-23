// Default function

function getDrinkByProfession(capSentence) {}

// My Solution

function getDrinkByProfession(param) {
  function capSentence() {
    let wordArray = param.toLowerCase().split(" ");
    let capsArray = wordArray.map(word => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return capsArray.join(" ");
  }
  if (capSentence() === "Jabroni") {
    return "Patron Tequila";
  } else if (capSentence() === "School Counselor") {
    return "Anything with Alcohol";
  } else if (capSentence() === "Programmer") {
    return "Hipster Craft Beer";
  } else if (capSentence() === "Bike Gang Member") {
    return "Moonshine";
  } else if (capSentence() === "Politician") {
    return "Your tax dollars";
  } else if (capSentence() === "Rapper") {
    return "Cristal";
  } else {
    return "Beer";
  }
}

/* Firstly create a function that takes the input, converts it lower case and
splits each word into an array*/
/* Map the array, give the zero index of each element (the first letter) an uppercase
and then use slice(1) to append the remainder of the element to the capitlised first letter*/
// Join the array back together so the string are returned with capitals
// Then write an if/else statement which runs through the given inputs and return the outputs
