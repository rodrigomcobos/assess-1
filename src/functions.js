// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y;
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2;
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the absolute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  return Math.abs(x - y) < 0.001;
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return `${person} was drinking ${beverage} at ${location}.`;
}

// Return the given string with all vowels replaced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  let newWord = '';

  for (let currChar = 0; currChar < string.length; currChar++) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let starChar = '';

    for (let i = 0; i < vowels.length; i++) {
      if (string[currChar] === vowels[i]) {
        starChar = '*';
      }
    }

    if (starChar === '*') {
      newWord += starChar;
    } else {
      newWord += string[currChar];
    }
  }
  return newWord;
  // return string.replace(/[ai]/g, '*'); // Used a regular expression to remove all As and Is globally and replace it with *
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  const replacements = []; //create new array of replacements for the letters
  replacements['a'] = '4'; //each item in the array created equals to a specific number in string format since we can't add numbers to strings
  replacements['e'] = '3';
  replacements['i'] = '1';
  replacements['o'] = '0';
  replacements['s'] = '5';
  replacements['t'] = '7';

  let newString = ''; //set up a new string that will replace the original string

  for (let i = 0; i < string.length; i++) {
    //iterate over each letter on the string starting at 0
    if (replacements[string[i].toLowerCase()] !== undefined) {
      //checks if lowercase letter in replacements array is not undefined
      newString += replacements[string[i].toLowerCase()]; //if true then we'll add the new value in replacements array to newString
    } else {
      newString += string[i]; //if false then we'll add the current letter in the iteration
    }
  }
  return newString;
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
