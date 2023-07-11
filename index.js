function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split('').reverse().join('')
  return (word == reverseWord ? true : false)
  } //or reverseWord(word) === word

  //function isPalindrome(word) {
  //   for (let i=0; i < word.length/2; i++){
  //     if (word[i] !== word(word.length -1 -i)){
  //         return false
  //   }
  // }
  // return true
  //}

/* 
  Add your pseudocode here
  Is this word the same forward and backward?
  word, make it backward = drow, does word = drow? (true or false)
*/

/*
  Add written explanation of your solution here
  to create reverseWord:
  1 convert the string into an array with .split('')
  2 then reverse the array
  3 then join the array back together into a string
  Then see if word and reverseWord are equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("alyssa"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("jefe"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
