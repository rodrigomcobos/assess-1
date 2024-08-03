// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith('b') || words[i].startsWith('B')) {
      newArr.push(words[i]);
    }
  }
  return newArr;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  return originalArray.concat(additionalItems); // Used concat method to merge the arrays together
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  return items.filter(item); // Used the filter method again

  function item(value) {
    return value.length === length; // If the length of value is the same as length then it will be added to the array
  }
}

// this implies NEW Array. only if it says modify existing array.
// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let newArr = [];
  // iterate over array provided
  for (let i = 0; i < items.length; i++) {
    // if index is even
    if (i % 2 === 0) {
      // store item in new Array
      newArr.push(items[i]);
    }
    // if index is odd : do nothing
  }
  // return the NEW Array you build with even elements.
  return newArr;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(letter)) {
      newArr.push(i);
    }
  }
  return newArr;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
