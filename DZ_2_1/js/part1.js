
// Task 1

var task1 = document.getElementById('task1'),
    button1 = document.getElementById('button1');


function getAges(){
  var yearborn = document.getElementById('yearborn').value,
      yearbornfull = 0, 
      yeartoday = 2017;

    if(yearborn <= 17 && yearborn >=0){
          yearbornfull = 20 + yearborn;
                   
    } else   if(yearborn <= 99 && yearborn >= 18 ){
          yearbornfull = 19 + yearborn;
           
    } else   if(yearborn > 1000){
          yearbornfull = yearborn;
           
    } else {
          task1.innerHTML ='Введите год рождения';
    }

    var ages = yeartoday - yearbornfull;
    task1.innerHTML ='Вам - ' + ages;
}

//getAges();

button1.addEventListener('click', getAges, false);

// Task 2

var task2 = document.getElementById('task2'),
    button2 = document.getElementById('button2');

function compare (){
  var number1 = document.getElementById('number-one').value,
      number2 = document.getElementById('number-two').value;
   
    if (number1 > number2){
      task2.innerHTML = 'Число ' + number1 + ' больше числа ' + number2; 
    } else if (number1 < number2){
      task2.innerHTML = 'Число ' + number1 + ' меньше числа ' + number2; 
    } else if (number1 = number2) {
      task2.innerHTML = 'Число ' + number1 + ' равно числу ' + number2; 
    } else {
      task2.innerHTML = ' Введите два числа'; 
    }
}

//compare();

button2.addEventListener('click', compare, false);


// Task 3

var task3 = document.getElementById('task3'),
    button3 = document.getElementById('button3');

function getEntrance(){
	var number = document.getElementById('number').value;
		
		if(number >=1 && number <=20){
    task3.innerHTML ='Квартира в первом подъезде';
  } else   

  if(number >=21 && number <=64){
    task3.innerHTML ='Квартира во втором подъезде';
  } else  

  if(number >=65 && number <=80){
    task3.innerHTML ='Квартира в третьем подъезде';
  } else if (number >80){
    task3.innerHTML ='Такой квартиры в доме нет';
  } else {
   task3.innerHTML ='Введите номер квартиры';
  }

}

getEntrance();

button3.addEventListener('click', getEntrance, false);


// Task 4

var task4 = document.getElementById('task4'),
    button4 = document.getElementById('button4');

function getLogin (){
  var login = document.getElementById('login').value,
      password = document.getElementById('password').value;
   
    if (login == 'ivan' && password == 333){
      task4.innerHTML = 'Добро пожаловать!'; 
    } else if (login == 'ssss' && password == 666){
      task4.innerHTML = 'Добро пожаловать!'; 
    }  else if (login === 'gibs' && password === 000){
      task4.innerHTML = 'Добро пожаловать!'; 
    } else {
      task4.innerHTML = 'ОШИБКА'; 
    }
}

//getLogin();

button4.addEventListener('click', getLogin, false);


// Task 5

var task5 = document.getElementById('task5'),
    button5 = document.getElementById('button5');

function comparethree (){
  var numeric1 = document.getElementById('numeric-one').value,
      numeric2 = document.getElementById('numeric-two').value,
      numeric3 = document.getElementById('numeric-three').value;
   
    if (numeric1 > numeric2 && numeric1 > numeric3){
      task5.innerHTML = 'Число ' + numeric1 + ' больше чисел ' + numeric2 + ' и ' + numeric3; 
    } else if (numeric2 > numeric1 && numeric2 > numeric3){
     task5.innerHTML = 'Число ' + numeric2 + ' больше чисел ' + numeric1 + ' и ' + numeric3; 
    } else if (numeric3 > numeric2 && numeric3 > numeric1) {
      task5.innerHTML = 'Число ' + numeric3 + ' больше чисел ' + numeric2 + ' и ' + numeric1; 
    } else {
      task5.innerHTML = ' Введите три числа'; 
    }
}

comparethree();

button5.addEventListener('click', comparethree, false);


