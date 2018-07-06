var money = +prompt('Ваш бюджет на месяц?');
var name = prompt('Название вашего магазина?');
var time = 19;

var mainList = {
	budget: money,
	nameShop: name,
	shopGoods: [],
	employers: {},
  open: true
};


for (var i = 0; i < 5; i++) {

	var a = prompt('Укажите тип товара для продажи.');

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		alert('Неверно! Попробуйте снова.');
		i--;
	}
}

/*var i = 0;
while (i < 5) {

	var a = prompt('Укажите тип товара для продажи.');

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert('Неверно! Попробуйте снова'.);
		i--;
	}
}*/

// var i = 0;
// do {
// 	var a = prompt('Укажите тип товара для продажи.');

// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
// 		console.log('Все верно');
// 		mainList.shopGoods[i] = a;
// 		i++;
// 	} else {
// 		alert('Неверно! Попробуйте снова'.);
// 		i--;
// 	}
// } while (i < 5);

if (time < 0) {
	console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
} else if (time < 24) {
	console.log('Уже слишком поздно!');
} else {
	console.log('В сутках только 24 часа');
}

alert('Ваш бюджет на день ' + mainList.budget/30);

console.log(mainList);
