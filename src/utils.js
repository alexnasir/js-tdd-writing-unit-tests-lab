// isPalindrome.js

function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string.");
    }
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must only contain alphabetic characters.");
    }
    if (word.length === 0) {
      return false;  // Return false for an empty string
    }
  
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
  }
  
  export default isPalindrome;
  