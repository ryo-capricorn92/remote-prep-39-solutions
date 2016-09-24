  ///////////////////////////////
 ///////     Warmup     ////////
///////////////////////////////

// ex-3
function cube x {
return x * x * y;
// needs parameter parenthesis around the parameter (x), needs closing curly
// brace at the end of the function (new line), line 7 needs to be indented to
// two spaces, and y is not defined - that should be x.

// correct function -->
function cube (x) {
  return x * x * x;
}



// ex-4
function lhs (a, b) {
  return (a + b) * (a + b);
}

function rhs (a, b) {
  return (a * a) + (2 * a * b) + (b * b);
}

// these DO NOT evaluate to the same value. Javascript works a little different
// under the hood ;)





  /////////////////////////////////////////////
 ///////     Boolean Conditionals     ////////
/////////////////////////////////////////////

// *** BASIC REQUIREMENTS *** //

// * Comparison Operators * //

// ex-3
  12 < 78
  // => true

  24 < 16
  // => false

  45 !== 38
  // => true

  "45" === 45
  // => false

  "6" !== "six"
  // => true



// ex-4
function oldEnoughToDrink (age) {
  if (age >= 21) {
    return true;
  }
  return false;
}



// ex-5
function sameLength (str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}



// ex-6
function passwordLongEnough (password) {
  if (password >= 8) {
    return true;
  }
  return false;
}



// * Conditionals: if * //



// ex-1
function bouncer (name, age) {
  if (age >= 21) {
    return "Welcome, " + name + '!';
  }
  return "Go home, " + name;
}



// ex-2
function max (num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}



// ex-3
function min (num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
}



// ex-4
function larger (str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  }
  return str2;
}

function smaller (str1, str2) {
  if (str1.length < str2.length) {
    return str1;
  }
  return str2;
}



// *** MORE PRACTICE *** //

// ex-1
  106 < 12
  // => false

  "wiz" === "wiz"
  // => true

  7 * 7  === 49
  // => true

  12 !== (24 / 2)
  // => false

  (20 % 2) <= -1
  // => true

  (9 / 3) + (5 * 5) === 28
  // => true



// ex-2
function even (num) {
  if ((num % 2) === 0) {
    return true;
  }
  return false;
}

function odd (num) {
  // I'm using a short hand here for ((num % 2) === 1)
  // this works because all values are given a "truthy-ness" and "falsey-ness" value
  // 0 has a falsey value where all other numbers have a truthy value ie,
  // if (1) {
  //   console.log("will log to the console");
  // }
  // if (0) {
  //   console.log("will not log to the console");
  // }
  // so because (num % 2) will come to 1 for an odd number and 0 for an odd
  // number, we can simply use this as out conditional
  // as a note - this means that we could have done if (!(num % 2)) for even
  if (num % 2) {
    return true;
  }
  return false;
}

function positive (num) {
  if (num >= 0) {
    return true;
  }
  return false
}

function negative (num) {
  if (num < 0) {
    return true;
  }
  return false;
}



// ex-3
function randInt (n) {
  // between 0 and n
  return Math.floor(Math.random() * (n + 1));
  // or
  return Math.ceil(Math.random() * n);
  // this has a very small chance of including 0, but is basically between 1 and n
}

function guessMyNumber (n) {
  if (n === randInt(5)) {
    return "You guessed my number!";
  }
  return "Nope! That wasn't it!";
}



  //////////////////////////////////////////
 ///////     More Conditionals     ////////
//////////////////////////////////////////

// *** BASIC REQUIREMENTS *** //

// * Logical Operators * //



// ex-1
// ! is a unary operator - it only works on a single value at a time, ie !false



// ex-2
!(2 >= 2) // false
!(4 === 4) // false
!(5 !== 5) // true



// ex-3
1 > 2 || 2 > 2 || 3 > 2 // true
5 < 5 || 75 < 74 // false



// * Conditionals: else if & else * //


// ex-1
function bouncer (name, age) {
  if (name !== "Joe" && age >= 21) {
    return "Welcome, " + name + '!';
  } else {
    return "Go home, " + name;
  }
}



// ex-2
function scoreToGrade (num) {
  if (num > 90) {
    return 'A';
  } else if (num >= 80) {
    return 'B';
  } else if (num >= 70) {
    return 'C';
  } else if (num >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}



// ex-3
function scoreToGrade (num) {
  if (num > 100 || num < 0) {
    return 'INVALID SCORE';
  } else if (num > 90) {
    return 'A';
  } else if (num >= 80) {
    return 'B';
  } else if (num >= 70) {
    return 'C';
  } else if (num >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}



// *** MORE PRACTICE *** //



// ex-1
function whatToDoOutside (temperature, condition) {
  if (temperature >= 65) {
    if (condition === 'sunny') {
      return 'Go swimming'
    } else if (condition === 'windy') {
      return 'Go sailing';
    } else {
      return 'Read';
    }
  } else if (temperature < 65 && temperature > 32) {
    if (condition === 'sunny') {
      return 'Read outside';
    } else {
      return 'Read inside';
    }
  } else {
    return 'Stay inside and read, it\'s way to cold outside.'
  }
}



// ex-2
function function guessMyNumber (n) {
  if (n > 5) {
    return 'Please give a number between 0 and 5';
  }
  if (n === randInt(5)) {
    return "You guessed my number!";
  }
  else {
    return "Nope! That wasn't it!";
  }
}



// ex-3
function scoreToGrade (num) {
  if (num > 100 || num < 0) {
    return 'INVALID SCORE';
  } else if (num > 90) {
    if (num >= 98) {
      return 'A+';
    } else if (num <= 92) {
      return 'A-';
    } else {
      return 'A';
    }
  } else if (num >= 80) {
    if (num >= 88) {
      return 'B+';
    } else if (num <= 82) {
      return 'B-';
    } else {
      return 'B';
    }
  } else if (num >= 70) {
    if (num >= 78) {
      return 'C+';
    } else if (num <= 72) {
      return 'C-';
    } else {
      return 'C';
    }
  } else if (num >= 60) {
    if (num >= 68) {
      return 'D+';
    } else if (num <= 62) {
      return 'D-';
    } else {
      return 'D';
    }
  } else {
    return 'F';
  }
}



// *** ADVANCED *** //



// ex-1
function bouncer (name, age) {
  if (name !== "Joe" && age >= 21) {
    return "Welcome, " + name + '!';
  } else if (age >= 18) {
    return 'You\'ll need a wristband, ' + name;
  } else {
    return "Go home, " + name;
  }
}



// ex-2
function letterGrade (letter, score) {
  if (score % 10 >= 8) {
    return letter + '+';
  } else if (score % 10 <= 2) {
    return letter + '-';
  } else {
    return letter;
  }
}

function scoreToGrade (num) {
  if (num > 100 || num < 0) {
    return 'INVALID SCORE';
  } else if (num > 90) {
    return letterGrade('A', num);
  } else if (num >= 80) {
    return letterGrade('B', num);
  } else if (num >= 70) {
    return letterGrade('C', num);
  } else if (num >= 60) {
    return letterGrade('D', num);
  } else {
    return 'F';
  }
}



// ex-3
function or (one, two) {
  if (one && !two) {
    return true;
  } else if (!one && two) {
    return true;
  } else {
    return false;
  }
}

function and (one, two) {
  if (!one || !two) {
    return false;
  } else {
    return true;
  }
}
