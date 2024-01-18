let password = 'povidlo'; //Задание 1
let password2 = prompt("Введите пароль");

if (password === password2) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неверно");
}

let c = Number(prompt("Введите число")); //Задание 2

if ((c > 0) && (c < 10)) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let d = Number(prompt("Введите число")); //Задание 3
let e = Number(prompt("Введите число"));

if ((d > 100) || (e > 10)) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let a = '2'; //Задание 4
let b = '3';

alert(Number(a) + Number(b));

let monthNumber = Number(prompt("Введите номер месяца")); //Задание 5

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Это зима');
        break;

    case 3:
    case 4:
    case 5:
        console.log('Это весна');
        break;

    case 6:
    case 7:
    case 8:
        console.log('Это лето');
        break;

    case 9:
    case 10:
    case 11:
        console.log('Это осень');
        break;
    default:
        console.log('Месяца с таким номером не существует. Подумайте еще раз');
        break;
}

let l = Number(prompt("Введите число")); //Задание 7

if (l % 2 === 0) {
    alert('Число четное');
} else if (l % 2 === 1) {
    alert('Число нечетное');
}
else {
    alert('Ты уверен в том, что ты ввел?');
}
