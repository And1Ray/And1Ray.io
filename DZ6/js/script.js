let nameValue = document.getElementsByClassName('name-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
    itemsValue = document.getElementsByClassName('items-value')[0],
    employersValue = document.getElementsByClassName('employers-value')[0],
    discountValue = document.getElementsByClassName('discount-value')[0],
    isopenValue = document.getElementsByClassName('isopen-value')[0],
    timeValue = document.querySelector('.time-value'),
    isOpen = document.querySelector('.isopen'),

    goodsItem = document.getElementsByClassName('goods-item'),
    btn = document.getElementsByTagName('button'),
    chooseItem = document.querySelector('.choose-item'),
    timeItem = document.querySelector('.time-item'),
    countBudget = document.querySelector('.count-budget-value'),
    discountBudget = document.querySelector('.discount-budget-value'),
    hireEmployersItem = document.querySelectorAll('.hire-employers-item');


var money;

btn[0].addEventListener('click', () => {

  let money = +prompt('Ваш бюджет на месяц?', '');
  while (isNaN(money) || money === '' || money === null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  mainList.budget = money;
  budgetValue.textContent = money;
  nameValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();
  mainList.nameShop = nameValue.textContent;
});

btn[1].addEventListener('click', () => {
  for (let i = 0; i < goodsItem.length; i++) {
    let a = goodsItem[i].value;
    if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a;
      goodsValue.textContent = mainList.shopGoods;
    } else {
      alert('Неверно! Попробуйте снова.');
      i--;
    }
  }
});

chooseItem.addEventListener('change', () => {
  let items = chooseItem.value;
  if (isNaN(items) && items != '') {
    mainList.shopItems = items.split(',');
    mainList.shopItems.sort();

    itemsValue.textContent = mainList.shopItems;
  }
});

timeValue.addEventListener('change', () => {
  let time = timeValue.value;
  if (time < 0) {
      console.log('Такого не может быть');
      mainList.open = false;
    } else if (time > 8 && time < 20) {
      mainList.open = true;
      console.log('Время работать!');
    } else if (time < 24) {
      mainList.open = false;
      console.log('Уже слишком поздно!');
      mainList.open = false;
    } else {
      mainList.open = false;
      console.log('В сутках только 24 часа');
    }

    if (mainList.open == true) {
      isopenValue.style.backgroundColor = 'green';
      isOpen.textContent = 'Магазин открыт';
    } else {
      isopenValue.style.backgroundColor = 'red';
      isOpen.textContent = 'Магазин закрыт';
    }
});

btn[2].addEventListener('click', () => {
  countBudget.value = mainList.budget / 30; 
});

btn[3].addEventListener('click', () => {
  for (let i = 0; i < hireEmployersItem.length; i++) {
    let name = hireEmployersItem[i].value;
    mainList.employers[i] = name;

    employersValue.textContent += mainList.employers[i] + ', ';
  }
});

btn[4].addEventListener('change', () => {
  
});

let mainList = {
  budget: money,
  nameShop: name,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
  shopItems:[],
};

console.log(mainList);
