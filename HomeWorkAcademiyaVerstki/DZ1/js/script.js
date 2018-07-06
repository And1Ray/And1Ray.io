var budget = +prompt('Ваш бюджет на месяц?');
var nameShop = prompt('Название вашего магазина?');
var mainList = {
	budget: 10,
	nameShop: 'shop',
	shopGoods: [],
	employers: {},
  open: true
};

mainList.budget = budget;
mainList.nameShop = nameShop;
mainList.shopGoods[0] = prompt('Укажите первый тип товара для продажи');
mainList.shopGoods[1] = prompt('Укажите второй тип товара для продажи');
mainList.shopGoods[2] = prompt('Укажите третий тип товара для продажи');

alert('Ваш бюджет на день ' + mainList.budget/30);

console.log(mainList);