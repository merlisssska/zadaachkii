let ageOfPerson1 = 120;
let ageOfPerson2 = "220";
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = "Charlie";
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = "JavaScript";
const bestProgrammingLanguage2 = "java";
console.log(
  bestProgrammingLanguage1,
  typeof bestProgrammingLanguage1,
  "переменную с const переопределить нельзя"
);

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(
  isJavaScriptProgrammer2,
  typeof isJavaScriptProgrammer2,
  "^//^"
);

let helloText1 = "bye";
let helloText2 = "пока";
helloText2 = helloText1;
console.log(helloText2, typeof helloText2);
