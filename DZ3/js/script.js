var money, shopName, time, price = 300;

var mainList = {
  budget: money,
  nameShop: shopName,
  shopGoods: [],
  employers: {},
  open: true,
  discount: true
};

function start(argument) {
  money = +prompt('Ваш бюджет на месяц?');

  while (isNaN(money) || money === '' || money === null) {
    money = +prompt('Ваш бюджет на месяц?');
  }
  console.log('Верно');
  mainList.budget = money;

  shopName = prompt('Название вашего магазина?').toUpperCase();
  console.log('Верно');
  mainList.nameShop = shopName;
}
start();

function chooseGoods() {
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
}
chooseGoods();

function workTime(time) {
  if (time < 0) {
    console.log('Такого не может быть');
  } else if (time > 8 && time < 20) {
    mainList.open = true;
    console.log('Время работать!');
  } else if (time < 24) {
    mainList.open = false;
    console.log('Уже слишком поздно!');
  } else {
    mainList.open = false;
    console.log('В сутках только 24 часа');
  }

  if (mainList.open === true) {
    console.log('Магазин открыт');
  } else {
    console.log('Закрыто');
  }
}
workTime(+prompt('Сколько сейчас время?'));

function discountSystem(argument) {
  if (mainList.discount === true) {
    price *= 0.8;
    console.log('Цена по программе дисконт' + price);
  }
}
discountSystem();

function employersHiring(argument) {
  for (var i = 1; i < 5; i++) {
    mainList.employers['nameUser' + i] = prompt('Введите имя сотрудника');
  }
}
employersHiring();

function budgetInDay(argument) {
  alert('Ваш бюджет на день ' + money / 30);
}
budgetInDay();

console.log(mainList);
