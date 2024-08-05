// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
  let commonWords = []; //setting new array that will be  returned

  for (let i = 0; i < array1.length; i++) {
    //iterating through the first array
    for (let j = 0; j < array2.length; j++) {
      //iterating through the second array
      if (array1[i] === array2[j]) {
        //checking if current array1 value is the same as current array2 value
        if (!commonWords.includes(array1[i])) {
          //if current value does not include the value in array 1
          commonWords.push(array1[i]); //we push it to array 1
        }
        break; // we stop here once value of array1 is not the same as value of array2
      }
    }
  }
  return commonWords;
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
  let newArr = []; //setting up new array that will be returned

  for (let i = 1; i <= 100; i++) {
    //iterating over 1 to 100
    if (i % a === 0 || i % b === 0 || i % c === 0) {
      //checking if each parameter is an even number
      newArr.push(i); //if true then add to newArr
    }
  }
  return newArr;
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
  let newString = ''; //lets store the new string

  let count = 1; //setting up a counter for consecutive letters

  for (let i = 1; i < string.length; i++) {
    //iterate the string starting at the second letter
    if (string[i] === string[i - 1]) {
      //check if the letter is the same as the previous one, thats why -1
      count++; //increase the count for duplicates
    } else {
      if (count > 1) {
        //if the current letter count is greater than the previous
        newString += count + string[i - 1]; // add the previous character and the count to the new string
      } else {
        newString += string[i - 1];
      }
      count = 1; //resetting counter back to 1
    }
  }
  if (count > 1) {
    //after the for loop lets handle the remaining letters
    newString += count + string[string.length - 1]; //if count is greater than 1 we'll add the count and the last letter to the new string
  } else {
    newString += string[string.length - 1]; //if count is 1 we add the last letter
  }
  return newString;
}

export { commonStrings, compressString, divisibleByEither };
