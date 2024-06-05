// Строгий режим
"use strict";

let userAge;
userAge = 10;
console.log(userAge);
console.log(typeof userAge);
userAge == "20";
console.log(typeof userAge);
console.log(userAge);
let userName = "Cote";
console.log(typeof userName);
console.log(userName);
const ageCote = 15;
let domenCote = "cote-lapyx.com";
console.log(typeof domenCote);
console.log(domenCote);
console.log(domenCote.length);
console.log(domenCote.toUpperCase());
console.log(domenCote.toLowerCase());
console.log(domenCote.includes("co"));
console.log(domenCote.startsWith());
console.log(domenCote.endsWith("com"));
console.log(domenCote.slice(0, 5));
console.log(domenCote.replace("co", "java co"));

//Задача №1
// Що потрапить в консоль?

let someVar = 12;
++someVar; // 1+12 = 13;

if (someVar) {
  console.log(`В консоль потрапить: ${someVar};`);
  //	В консоль потрапить: 13
}

/*Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д. */

let someArrayOne = [];
console.log(typeof someArrayOne);

if (someArrayOne.length != 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`Пункт №${i}`);
  }
}

/* Задача №3
Що потрапить в консоль ? 
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
*/
//Рішення:

// (Пріорітет у операторів порівняння)
//if (false || false && true || false) {}

let numOne = 2 * 20; // 40
console.log(numOne);
let numTwo = 30 / 2; // 15
console.log(numTwo);
let numThree = 10 <= "10"; //true
console.log(numThree);
let numFour = 20 === "20"; //folse
console.log(numFour);

// if (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20")
// if ( folse   || folse  &&   true    ||     folse)
// if (       folse       &&          folse)
// if (                 folse      )
let result = 2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20";
console.log(result);
// В консоль потрапить: false;
if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
  console.log("000");
}
// Result: 000 !== false
// Нічого не буде в консолі

/*
Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 
*/

function divving_show(a = 1, b = 1) {
  let result = a / b;
  if (b === 0) {
    console.log("Помилка: Некоректні аргументи для ділення");
  } else if (!isFinite(result)) {
    console.log(
      "Помилка: Ділення веде до нескінченності або нечислового результату"
    );
  } else {
    console.log(`Результат ділення: ${result}`);
  }
}
divving_show();
divving_show(3, 0);
divving_show(0, 3);
divving_show(0, 0);
divving_show(-5);
divving_show(`a`, 2);
divving_show(10, 5);
divving_show(5, 10);
divving_show(-5, 5);

/*
Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

*/
//Відповідь;

let arr = ["a", 10, "10", `10`, -7, 100 / `10`, 100 / 10, "100" / 10];
arr.forEach((element, index) => {
  if (element === 10)
    console.log(`В Індекс массиву № ${index}`, `записано число: ${element}`);
});
