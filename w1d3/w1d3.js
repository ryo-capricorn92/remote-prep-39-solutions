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




  /////////////////////////////////////////
 ///////     Intro Repetition     ////////
/////////////////////////////////////////



// *** BASIC REQUIREMENTS *** //


// ex-1
function sum (n) {
  // I'm using a short hand here for (n === 0)
  // this works because all values are given a "truthy-ness" and "falsey-ness" value
  // 0 has a falsey value where all other numbers have a truthy value ie,
  // if (1) {
  //   console.log("will log to the console");
  // }
  // if (0) {
  //   console.log("will not log to the console");
  // }
  // we want to check if the number is zero. So we want the conditional to be
  // true on zero. Since zero is a falsey value, we can use the NOT operator to
  // change it to true.
  // Remember, this could be replaced with if (n === 0)
  if (!n) {
    return 0;
  } else {
    return n + sum(n - 1);
  }
}



// ex-2
function factorial (n) {
  if (!n) {
    return 1;
  } else {
    return n * sum(n - 1);
  }
}



// ex-3
function repeatString (str, count) {
  if (!count) {
    return '';
  } else {
    return str + repeatString(str, count - 1);
  }
}



// ex-4
function fib (n) {
  if (!n || n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}



// *** MORE PRACTICE *** //

// ex-1
function sum (start, end) {
  if (start > end) {
    return sum(end, start);
  } else if (start === end) {
    return end;
  } else {
    return start + sum(start + 1, end);
  }
}



// ex-2
function product (start, end) {
  if (start > end) {
    return product(end, start);
  } else if (start === end) {
    return end;
  } else {
    return start * product(start + 1, end);
  }
}

function factorial (n) {
  return product(1, n);
}



// ex-3
function inc (x) {
  return x + 1;
}

function dec (x) {
  return x - 1;
}

function add (x, y) {
  // remember that !x is the same as saying x === 0
  if (!x) {
    return y;
  } else {
    return add(dec(x), inc(y));
  }
}



// ex-4
function isEven (n) {
  if (!n) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}



// ex-5
function multiply (x, y) {
  if (y === 1) {
    return x;
  } else {
    return x + multiply(x, y - 1);
  }
}



// *** ADVANCED *** //



// ex-1
function length (str) {
  if (str === '') {
    return 0;
  } else {
    return 1 + length(str.slice(1));
  }
}



// ex-2
