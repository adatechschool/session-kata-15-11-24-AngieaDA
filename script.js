// dire ce que c'est la fonction getLatinCharacterList c'est la premier étape
function getLatinCharacterList (Texte){
  console.log("afficher l'aphabet ")
  // faire une chaine avec l'alphabet morse
  return Texte .split('');
}

// Afficher le mot Hello World dans la console
const TestText = "Hello, world";
let text = "getLatinCharacterList"(TesteTexte)
// faire console.log pour afficher dans la console l'asphabet morse
const morseTable = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
    "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
    "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
    "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
    "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    "0": "-----", ",": "--..--", ".": ".-.-.-", "?": "..--..", "'": ".----.",
    "!": "-.-.--", "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...",
    ":": "---...", ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-",
    "_": "..--.-", "\"": ".-..-.", "$": "...-..-", "@": ".--.-.", " ": "/"
};
function encode(text) {
    const characters = getLatinCharacterList(text);
   return morseTable[upperChar] || "";
}
const invertedMorseTable = Object.fromEntries(
    Object.entries(morseTable).map(([key, value]) => [value, key])
);

// Fonction pour diviser le texte Morse en caractères individuels
function getMorseCharacterList(morseText) {
    return morseText.trim().split(' ');
}
ocument.getElementById('textToMorse').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value;
    const morseOutput = encode(textInput);
    document.getElementById('output').innerText = morseOutput;
});

// Fonction pour traduire un caractère Morse en caractère latin
function translateMorseCharacter(morseChar) 
    return invertedMorseTable[morseChar] || '';
    function encode(text) 
        const characters = text.split('');
        const morseCode = characters.map(char => 
            const upperChar = char.toUpperCase();
            return morseTable[upperChar] || '';

