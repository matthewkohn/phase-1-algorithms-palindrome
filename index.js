function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Add your pseudocode here

  1. Reverse the letters in the string
    a. Split the string by "" into an array of letters
    b. reverse the new array
    c. join the elements back into a string
    d. return the new string
  2. Check to see if the reversed word is the same as the original word
  3. If it is the same, return true; if not, return false.
*/

/*
  Add written explanation of your solution here

  I'm  writing a function that checks to see if a word is a pallindrome. It will check a word by reversing it, checking to see if it's the same backwards as it is forwards. If it is, it will return true. If not, it will return false. Since I'm returning a boolean, I can check equality in the return statement after I reverse the word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
