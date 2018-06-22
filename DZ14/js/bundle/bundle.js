(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function () {

	let tab = require('../parts/tabs.js');
	let modal = require('../parts/modal.js');
	let form = require('../parts/form.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	form();
	slider();
	calc();
	timer();
});
},{"../parts/calc.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tabs.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function calc () {
	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;


			function check(elem) {
				elem.addEventListener('keyup', function () {
					this.value = this.value.replace(/[^\d]/,'').substr(0,2); 
				}); 
			}
			check(persons);
			check(restDays);

			persons.addEventListener('change', function() {
				personsSum = +this.value;
				total = (daysSum + personsSum) * 4000;
				if (restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});
	

			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (daysSum + personsSum) * 4000;
				if (persons.value == '' || restDays.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			place.addEventListener('change', function() {
				if (restDays.value == '' && persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});

			setInterval(function() {
					if (restDays.value == '' || persons.value == '') {
						totalValue.innerHTML = 0;
					}
			}, 1);

			persons.value = '';
			restDays.value = '';
}

module.exports = calc;
},{}],3:[function(require,module,exports){
function form () {
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Скоро мы с вами свяжемся.';
	message.failure = 'Что то пошло не так...';

	let form = document.getElementsByClassName('main-form')[0],
			footerForm = document.getElementById('form'),
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

	function sendForm (elem) {
 		elem.addEventListener('submit', function (e) {
		e.preventDefault();
		elem.appendChild(statusMessage);
		let formData = new FormData(elem);

		function postData(data) {
			return new Promise(function(resolve, reject){
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				request.onreadystatechange = function () {
			if (request.readyState < 4) {
				resolve()
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						resolve()
					} else {
						reject()
					}
				}
			}
			request.send(data);
		});
			function clearInput () {
				for (var i = 0; i < input.length; i++) {
				input[i].value = '';
				}
			}	
		}
		postData(formData)
			.then(()=> statusMessage.innerHTML = message.loading)
			.then(()=> statusMessage.innerHTML = message.success)
			.catch(()=> statusMessage.innerHTML = message.failure)
			.then(clearInput)

	 });
	}

	sendForm(form);
	sendForm(footerForm);
}

module.exports = form;
},{}],4:[function(require,module,exports){
function modal () {
	let more = document.querySelector('.more'),
			description = document.querySelectorAll('.description-btn'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	for (let i = 0; i < 4; i++) {
		description[i].addEventListener('click', function() {
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider () {
	let slideIndex = 1,
					slides = document.getElementsByClassName('slider-item'),
					prev = document.querySelector('.prev'),
					next = document.querySelector('.next'),
					dotsWrap = document.querySelector('.slider-dots'),
					dots = document.getElementsByClassName('dot');

					showSlides(slideIndex);

					function showSlides(n) {
						if (n > slides.length) {
							slideIndex = 1;
						};
						if (n < 1) {
							slideIndex = slides.length;
						};
						for (var i = 0; i < slides.length; i++) {
							slides[i].style.display = 'none';
						};
						for (var i = 0; i < dots.length; i++) {
							dots[i].classList.remove('dot-active');
						};
						slides[slideIndex - 1].style.display = 'block';
						dots[slideIndex - 1].classList.add('dot-active');
					}

					function plusSlides (n) {
						showSlides(slideIndex += n);
					}

					function currentSlide (n) {
						showSlides(slideIndex = n); 
					}

					prev.addEventListener('click', function () {
						plusSlides(-1);
					});
					next.addEventListener('click', function () {
						plusSlides(1);
					});

					dotsWrap.addEventListener('click', function (event) {
						for (var i = 0; i < dots.length + 1; i++) {
						 	if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
						 		currentSlide(i);
						 	}
						 } 
					});
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab () {
	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];


	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
		 	tabContent[i].classList.remove('show');
		 	tabContent[i].classList.add('hide');
		 } 
	}


	hideTabContent(1);

	function showTabContent (b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer () {
	let deadline = '2018-06-15';

	function getTimeRemaining (endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock (id, endtime = deadline) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function updateClock () {
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					if (hours.innerHTML < 10) hours.innerHTML = '0' + hours.innerHTML;
					minutes.innerHTML = t.minutes;
					if (minutes.innerHTML < 10) minutes.innerHTML = '0' + minutes.innerHTML;
					seconds.innerHTML = t.seconds;
					if (seconds.innerHTML < 10) seconds.innerHTML = '0' + seconds.innerHTML;

					let timeInterval = setInterval(updateClock, 1000);


					if (t.total <= 0) {
						clearInterval(timeInterval);
						hours.innerHTML = '00';
						minutes.innerHTML = '00';
						seconds.innerHTML = '00';
						}
				};
				updateClock();
				
	};
	setClock('timer'); 
}

module.exports = timer;
},{}]},{},[1]);
