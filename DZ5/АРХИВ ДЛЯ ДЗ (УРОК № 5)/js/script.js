var title = document.getElementById('title'),
				btn = document.querySelectorAll('.menu-item'),
				menu = document.querySelector('.menu'),
				adv = document.querySelector('.adv'),
				column = document.querySelectorAll('.column'),
				body = document.getElementsByTagName('body');

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

var li = document.createElement('li');
li.textContent = 'Пятый пункт';
li.classList.add('menu-item');

menu.insertBefore(btn[2], btn[1])
menu.insertBefore(li, btn[4]);

title.textContent = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

var question = document.querySelector('.prompt');
question.textContent = prompt('Как вы относитесь к технике apple?', '');

