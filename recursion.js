/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

console.log(product([2, 3, 4])); 


/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, maxLen = 0) {
  if (i === words.length) return maxLen;
  return longest(words, i + 1, Math.max(maxLen, words[i].length));
}

console.log(longest(["hello", "hi", "hola"])); 

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i >= str.length) return "";
  return str[i] + everyOther(str, i + 2);
}

console.log(everyOther("hello")); 


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let j = str.length - 1 - i;
  if (i >= j) return true;
  if (str[i] !== str[j]) return false;
  return isPalindrome(str, i + 1);
}

console.log(isPalindrome("tacocat")); 
console.log(isPalindrome("tacodog")); 


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, str, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === str) return i;
  return findIndex(arr, str, i + 1);
}

let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat")); 
console.log(findIndex(animals, "porcupine")); 


/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
  if (i < 0) return "";
  return str[i] + revString(str, i - 1);
}

console.log(revString("porcupine")); 

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

console.log(gatherStrings(nestedObj)); 


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid; 
    } else if (arr[mid] < val) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
