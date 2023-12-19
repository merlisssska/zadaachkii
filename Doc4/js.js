const myName = "Лиза";
let programmingLanguage = "JavaScripts";
const courseCreatorName = "Никиты Михайловича";
let reasonText = "Зарабатывать";
let numberOfMonth = "100000";

let MyInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage}. Сейчас я изучаю язык программирования ${programmingLanguage} ${courseCreatorName}.
 Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
console.log(
  MyInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
);
console.log(MyInfoText.length);
console.log(MyInfoText[0]);
console.log(MyInfoText[MyInfoText.length - 1]);

const userAge = prompt("Сколько лет?");
const formattedUserAge = parseInt(userAge.trim());

const userName = prompt("Как зовут?");
const formattedUserName = userName.trim().toLowerCase();

alert("Вас зовут " + formattedUserName + " Вам " + formattedUserAge + " лет.");
console.log(formattedUserName, formattedUserAge);

const userText = prompt("Введите текст").trim();
const wordFromText = prompt("Введите слово из текста").trim();

const indexOfWord = userText.indexOf(wordFromText);
const result = userText.slice(0, indexOfWord);

alert("Результат: " + result);
