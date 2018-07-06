var money, shopName, price = 300;

var mainList = {
  budget: money,
  nameShop: shopName,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
  shopItems:[],
  start: function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money === '' || money === null) {
      money = +prompt('Ваш бюджет на месяц?', '');
    }
    shopName = prompt('Название вашего магазина?', '').toUpperCase();
    mainList.budget = money;
    mainList.nameShop = shopName;
  },
  chooseGoods: function chooseGoods() {
    for (var i = 0; i < 5; i++) {

      var a = prompt('Укажите тип товара для продажи.', '');

      if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
        console.log('Все верно');
        mainList.shopGoods[i] = a;
      } else {
        alert('Неверно! Попробуйте снова.');
        i--;
      }
    }
  },
  workTime: function workTime(time) {
    time = (+prompt('Сколько сейчас время?'));
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
  },
  discountSystem: function discountSystem() {
    if (mainList.discount === true) {
      price *= 0.8;
      console.log('Цена по программе дисконт' + price);
    }
  },
  employersHiring: function employersHiring() {
    for (var i = 1; i < 5; i++) {
      mainList.employers['nameUser' + i] = prompt('Введите имя сотрудника', '');
    }
  },
  budgetInDay: function budgetInDay() {
    alert('Ваш бюджет на день ' + money / 30);
  },
  chooseShopItems: function chooseShopItems() {
    var items = prompt('Перечислите через запятую товары', '');

    mainList.shopItems = items.split(',');
    mainList.shopItems.push(prompt('подождите еще ', ''));
    mainList.shopItems.sort();
    mainList.shopItems.forEach( function(item, i, shopItems) {
      alert((i + 1) + ': ' + 'У нас вы можете купить: ' + item);
    });
  },
   liGoods: function liGoods () {
    for (var key in mainList.shopGoods) {
    console.log('Наш магазин включает в себя: ' + mainList.shopGoods[key]);
  }
  /*for (var key in mainList.shopGoods) {
    console.log('Наш магазин включает в себя: ' + key + ' - ' + mainList.shopGoods[key]);
  }
  */
 }
};

console.log(mainList);
