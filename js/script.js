"use strict";
/* // убери звездочку, что бы это заработало
// на 44 строчке css можно вернуть bg) убрать одну букву a
// lesson 5 Простое общение с пользователем
let security = prompt('Тебе есть 18 лет', 'Да');//Проверка с примером
console.log(typeof(security))//проверка на тип данных получаемые данные

// lesson 9 Циклы
let num = 50;
while (num < 55) {
  console.log(num);
  ++num;
}

do {
  //сделать, проверить
  console.log(num);
  num++;
} while (num < 55);
for (let i = 1; i < 8; i++) {
  // for используется почти всегда
  if (i == 6);{
    break; // проверка условия и выход из цикла
    continue; // пропуск 1 этапа, 7 будет выведено
  }
  console.log(i);
}

// lesson 11 Callback функции // делает очередь из функций
function learnJS(lang, callback) { //2 аргумента
  console.log("Я учу" + lang);
  callback();
}
learnJS("Javascript", function() {// 2 func выполн после 1
  console.log("Я проошел 3й урок")
})

// lesson 13 Массивы и псевдомассивы
let arr = [1, 2, 3, 4, 5];
arr.pop(); // удалить последний элемент массива
arr.push("5"); // добавить в конец 5 в виде строки
arr.shift(); // del 1 el
arr.unshift("1") // add 1 el
console.log(arr);

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) { // беребор элементов
  console.log(arr[i]); // length выдает ласт index+1
}
console.log(arr);

let arr = ["first", 2, 3, "four", 5];
arr.forEach(function(item, i, mass) { //1 каждый элемент, 
  //номер элемента, сам массив, если нужны только эоменты и чисило то нужны первые 2
  console.log(i + ': ' + item + " (массив: " + mass + ')');//func сработает,
  //когда запустится метод foreach
});
let mass = [1,3,4,6,8];// объекты это пары ключ, значение, так же и с массивами
for (key in mass) {// for in дает ключи, а for of дает сами значения
  console.log(key);
}

let ans = prompt("", ""),// получает ответ от пользоваеля
  arr = []; // записываем от пользоваеля

  arr = ans.split(','); // соедяет и как бы резделяет элементы в arr
  console.log(arr);

let arr = ["asd", 'asd', 'adad'],
    i = arr.join(', ');// join берет каждый el и склеивает в строку
    i = arr.sort(); //sort сортирует по алф  
    console.log(i); // со знач i будет строка, а с arr будет массив
  
    // сортировка цифр( нужна callback)
    let arr = [1,7,3],
    i = arr.sort(compareNum);// передаем результат func
    
function compareNum(a,b) {
  return a-b; // выесянет разницу между всеми el массива
}
console.log(arr);
 
// lesson 19 Скрипты и время их выполнения.
 let timerId = setTimeout(sayHello, 3000);
clearTimeout(timerId); // эта func для оставноки таймаута
function sayHello() {
  alert('Hello');
}


let timeId = setInterval(sayHey, 1000);

function sayHey(){
  console.log('hey')
}
let timer = setTimeout (function log() {// функию сразу запишем
  console.log('Hello');
  setTimeout(log, 2000);// функ вызывает саму себя
})

// lesson 23 Контекст вызова (this)
// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый создоанный объект  
// 4) Указание конкретного контекста - call, apply, bind

  console.log(this);// получаем undnefined в es6
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
showThis(4, 5);
showThis(5, 5);

let obj = {
  a: 20,
  b: 15,
  sum: function() {
    console.log(this);
    function shout() {
      console.log(this)
    }
    shout();
  }
}
obj.sum();

let user = { 
  name: "John"
};
function sayNmae(surname) {
  console.log(this);
  console.log(this.name + surname);// привязка контекста вызова
} 
console.log(sayNmae.call(user, 'Smith'));
console.log(sayNmae.apply(user, ['Snow']));


function count(number) {
  return this * number;
}
let double = count.bind(2);// count возвращает контекст вызова, (редко)
console.log(double(3));
console.log(double(10));

// lesson 25 ES6 let and const
function makeArray() { 
  var items = [];

  for (let i = 0; i < 10; i++) {// с var на выходе получаем 3 раза 10
    var item = function() { //создание новых фунцкий
      console.log(i);
    };
    items.push(item); //  новую функ, пушим в массив выше (items)
  }
  return items;
}

var arr = makeArray();

arr[1]();
arr[4]();
arr[7]();

// lesson 27 ES6 Параметры по умолчанию
 function man(number, double = 2){ // Присваивания по умолчанию 2
  // если для второго параметра не будет задано параметра, будет 2 
      console.log(number*double);
 }
 man(3,5);
 man(4);

// lesson 29 ES6 Spread-операторы
let video = ['youttube', 'rutube', 'vk'],
    blogs = ['inst', 'twitter', 'medium'],
    internet = [...video, ...blogs, 'vk', 'inst']; //... раскрывает массивы
    console.log(internet);

    function log(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(a + b + c)
    }
    let numbers = [2, 5, 7];

    log(...numbers);
    
// lesson 33 localStorage
localStorage.setItem('number', 1);
// добавление элемнта ключ значение
console.log(localStorage.setItem("number"));
// вывести его в консоль
localStorage.removeItem('number');
// удалить элемент с ключем number
localStorage.clear();
// очистить полностью

// пример кода с (галочкой запомнить пароль)

document.addEventListener('DOMContentLoaded', function(){

    let checkbox = document.getElementById('checkbox'),
        change = document.getElementById('home-link-item'),
        body = document.getElementsByTagName('body')[0];

    if(localStorage.getItem('isChecked') === 'true') {
          checkbox.checked = true;
    };
    if(localStorage.getItem('bg') === 'changed') {
      body.style.backgroundColor = '#FF4766' // меняем цвет bg
    }

    checkbox.addEventListener('click', function() {
      localStorage.setItem('isChecked', true);
    })
      change.addEventListener('click', function(){
        console.log('a')
        localStorage.setItem('bg', 'changed');
      })
})
// it's all
