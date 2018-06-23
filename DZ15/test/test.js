// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr2 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr2, myFunc));

let assert = require('chai').assert;

describe('Сумма', function() {
	it('Возвращает ли наша функция Тру?', function() {
		assert.equal(sum(10,10), true);
	});
});

describe('Проверка равенства', function() {
	it('num = 5?', function() {
		assert.equal(num, 5);
	});
});

describe('Возврат Ич', function() {
	it('return f', function() {
		console.log(each(arr2, myFunc));
	});
			
	it('Наша функция массив?', function() {
		assert.isArray(each(arr2, myFunc));
	});

	it('Результат как ожидали?', function() {
		assert.sameMembers(each(arr2, myFunc), [8,7,6,5,4]);
	});

	it('Наша функция массив?', function() {
		assert.lengthOf(each(arr2, myFunc), 5);
	});


});