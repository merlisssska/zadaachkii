const javaScriptDescription = "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный императивный и функциональный стили. Является реализацией спецификации EMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений";


const middleIndex = Math.floor(javaScriptDescription.length / 2);
const trimmedString = javaScriptDescription.slice(1, middleIndex);


const replacedString = trimmedString.replace(/а/g, 'A');


const stringWithoutSpaces = replacedString.replace(/\s/g, '');


const duplicatedString = stringWithoutSpaces.repeat(3);


const middleCharacterIndex = Math.floor(duplicatedString.length / 2);
const middleCharacter = duplicatedString[middleCharacterIndex];

console.log(duplicatedString);
console.log("Символ посередине:", middleCharacter);
