
// Task 1

var task1 = document.getElementById('task1');

for (var i = 0; i < 101; i++){
  if ( i % 2 == 0){
  	
  	task1.innerHTML +=  i + ', ';
  	 i += 1;
  	

	}
}

// Task 2


var task2 = document.getElementById('task2');

var i;
for (i = 200; i >= 0; i--){
 
      task2.innerHTML += i + ', ';
  
}


// Task 3


var task3 = document.getElementById('task3');

var i;
var summ = 0;
for (i = 0; i <= 100; i++){
 summ = summ + i;
}
 
      task3.innerHTML = summ ;
  



// Task 4

var task4 = document.getElementById('task4');
var button = document.getElementById('button');

function pow (){
	var number = document.getElementById('number').value,
		degree = document.getElementById('degree').value,
		rezult = 1;

		for( var i = 0; i < degree; i++){
			rezult *= number;
		}
		task4.innerHTML = ' Результат - ' + rezult; 
}

//pow();

button.addEventListener('click', pow, false);


// Task 5

var task5 = document.getElementById('task5');

var i;
var number=7;
var mult;
for (i = 1; i <= 9; i++){
 	mult = number * i;
 	task5.innerHTML += '<br />'+ i + '*' + number + '=' + mult ;
 }


// Task 6

var task6 = document.getElementById('task6');

var i;
var mult=1;
for (i = 1; i <= 50; i++){
 mult = mult * i;
       
}
task6.innerHTML = '<br />'+ mult ;


// Task 7

var task7 = document.getElementById('task7');

for (var i = 1000; i < 2000; i++){
  
  	task7.innerHTML += String.fromCharCode(i) + ', ';
  	
  	}
