  ///////////////////////////////
 ///////     Warmup     ////////
///////////////////////////////

// ex-1
function isHot(temperature) {
  if (temperature>90) {
    return "It's hot!";
  }
  return "It's not hot!";
}

// This function does not make perfect logical sense - it would never return anything
// other than "Drive a car" and "Do all the things", which does not make real world
// sense, but in this case we are only concerned with syntax and style, and therefor
// it has been left in all of it's illogical glory
function oldEnoughTo(age) {
  if (age >= 16) {
    return "Drive a car";
  } else if (age >= 17) {
    return "Vote";
  } else if (age >= 21) {
    return "Drink";
  } else {
    return "Do all the things!";
  }
}



// ex-2
function sayHello (language) {
  if (language === "english") {
    return "Hello!";
  } else if (language === "japanese") {
    return "Konnichiwa!";
  } else if (language === "german") {
    return "Guren tag!";
  } else {
    return "I don't know that language!";
  }
}
