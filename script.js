// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі 
//[номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
let array = [];

const logItems = function (array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += i+1 + " - " + array[i] + "\n\r";
        
    }
    console.log(string);
}
array = ["cat", "dog", "tiger", "hippo", "bear"];
logItems(array);


// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) 
//і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// let message = "";
// let pricePerWord = 0;
const calculateEngravingPrice = function(message, pricePerWord) {
    let words = message.split(" ");
let totalPrice = words.length * pricePerWord;
return console.log(totalPrice); 

}

calculateEngravingPrice("I love my Mom", 100);


// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
const findLongestWord = function(string) {
    let stringArray = string.split(" ");
    let max = stringArray[0];
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > max.length) {
            max = stringArray[i];
        }
        else continue
    }
    return console.log(max);
}

findLongestWord("I am the most beatiful girl in whole world");

// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = function(string) {
    if (string.length <= 40) {
        return console.log(string);
    }

    if (string.length > 40) {
        let formatedString = string.slice(0, 39) + "...";
        return console.log(formatedString);
    }
}

formatString("12345678912346789123456789123456789123456");

// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, 
//якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

checkForSpam = function(message1) {
    //let formatedMessage = message1.toLowerCase();
    if (message1.toLowerCase().includes("sale") || message1.toLowerCase().includes("spam")) {
        return true;
    }
    else return false;

    
}

checkForSpam("Welcome to final sale!!!");

// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. 
//Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 
//'Було введено не число, попробуйте ще раз', при цьому результат prompt записувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


let numbers = [];
while (true) {
    let input = prompt("Please enter your number");
    if (input === null) {
        break;
    }
    if(isNaN(input)) {
        alert('Було введено не число, попробуйте ще раз');
        continue;
    }
    numbers.push(input);
}
console.log(numbers);

if(numbers.length > 0) {
    let total = 0;
    for(let i=0; i<numbers.length; i++) {
        total+=Number(numbers[i]);
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
}