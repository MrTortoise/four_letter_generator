function generateLetters() {
  return getRandomCharacter() + getRandomCharacter() + getRandomCharacter() + getRandomCharacter()
}

function getRandomCharacter() {
  return String.fromCharCode(97 + getRandomCharacterIndex()).toUpperCase();
}

function getRandomCharacterIndex() {
  return Math.floor(Math.random() * 26);
}

module.exports = {
  generateFourLetters: generateLetters
}