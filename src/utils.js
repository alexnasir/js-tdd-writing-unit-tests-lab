// isPalindrome.js

function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string.");
    }
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must only contain alphabetic characters.");
    }

  if (word.length === 0) return false; // Explicitly handle empty strings

  const normalizedWord = word.toLowerCase();
  const reversedWord = normalizedWord.split('').reverse().join('');
  return normalizedWord === reversedWord;
}

  
  export default isPalindrome;
  