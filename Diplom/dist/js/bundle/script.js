'use strict';

window.addEventListener('DOMContentLoaded', function () {

	//Modal

	var btnPopupEngineer = document.querySelector('.popup_engineer_btn'),
	    phoneLink = document.querySelectorAll('.phone_link'),
	    modalPopupEngineer = document.querySelector('.popup_engineer'),
	    closeButton = document.querySelectorAll('.popup_close'),
	    modalPopup = document.querySelector('.popup');

	function modalWindowOpenClose(elem, value, modal) {
		elem.addEventListener('click', function (e) {
			e.preventDefault();
			modal.style.display = value;
		});

		modal.addEventListener('click', function (event) {
			var target = event.target;
			if (target == this) {
				modal.style.display = 'none';
			}
		});
	}

	modalWindowOpenClose(btnPopupEngineer, 'flex', modalPopupEngineer);
	modalWindowOpenClose(closeButton[1], 'none', modalPopupEngineer);

	for (var i = 0, j = 0; i < phoneLink.length, j < closeButton.length; i++, j++) {
		modalWindowOpenClose(phoneLink[i], 'flex', modalPopup);
		modalWindowOpenClose(closeButton[j], 'none', modalPopup);
	}

	function sixtySeconds(modal) {
		modalPopup.style.display = 'flex';
	}
	setTimeout(sixtySeconds, 60000);

	//Tabs

	var tabGlazing = document.getElementsByClassName('glazing_slider_tab'),
	    tabContentGlazing = document.getElementsByClassName('tab_content_link');

	var tabDecoration = document.getElementsByClassName('decoration_tab'),
	    tabContentDecoration = document.getElementsByClassName('tab_content_decoration');

	function tabs(tab, tabContent, classen) {
		var _loop = function _loop(_i) {
			tab[_i].addEventListener('click', function () {
				for (var _j = 0; _j < tab.length; _j++) {
					if (_j == _i) {
						tab[_j].classList.add(classen);
						tabContent[_j].style.display = 'block';
					} else {
						tab[_j].classList.remove(classen);
						tabContent[_j].style.display = 'none';
					}
				}
			});
		};

		for (var _i = 0; _i < tab.length; _i++) {
			_loop(_i);
		}
	}

	tabs(tabGlazing, tabContentGlazing, 'active');
	tabs(tabDecoration, tabContentDecoration, 'after_click');

	//Calc

	//ModalCalc

	var calcBtn = document.getElementsByClassName('popup_calc_btn'),
	    popupCalcBtn = document.getElementsByClassName('popup_calc_button')[0],
	    popupCalcProfileBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
	    modalCalc = document.getElementsByClassName('popup_calc')[0],
	    modalCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
	    modalCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
	    closeCalc = document.getElementsByClassName('popup_calc_close');

	function addCalc() {
		for (var _i2 = 0; _i2 < calcBtn.length; _i2++) {
			calcBtn[_i2].addEventListener('click', function () {
				modalCalc.style.display = 'flex';
			});
			closeCalc[0].addEventListener('click', function () {
				modalCalc.style.display = 'none';
			});
		}
	}
	addCalc();

	function calcMod(btn, modal, modalprev) {
		btn.addEventListener('click', function () {
			modal.style.display = 'flex';
			modalprev.style.display = 'none';
			console.log(info);
			console.log(JSON.stringify(info));
		});
		for (var _i3 = 0; _i3 < closeCalc.length; _i3++) {
			closeCalc[_i3].addEventListener('click', function () {
				modal.style.display = 'none';
				info.form = undefined;
				info.widthInfo = undefined;
				info.heightInfo = undefined;
				info.typeInfo = undefined;
				info.temp = undefined;
				width.value = '';
				height.value = '';
			});
		}
	}

	calcMod(popupCalcBtn, modalCalcProfile, modalCalc);
	calcMod(popupCalcProfileBtn, modalCalcEnd, modalCalcProfile);

	//CalcPicture

	var iconsMini = document.getElementsByClassName('mini_img'),
	    iconsBig = document.getElementsByClassName('big_png'),
	    formWindow = void 0;

	function icons(icon, icBig) {
		var _loop2 = function _loop2(_i4) {
			icon[_i4].addEventListener('click', function (e) {
				e.preventDefault();
				info.form = e.target;
				for (var _j2 = 0; _j2 < icon.length; _j2++) {
					if (_j2 == _i4) {
						icon[_j2].style.width = '114px';
						icon[_j2].style.height = '67px';
						icBig[_j2].style.display = 'inline-block';
					} else {
						icon[_j2].style.width = '94px';
						icon[_j2].style.height = '47px';
						icBig[_j2].style.display = 'none';
					}
				}
			});
		};

		for (var _i4 = 0; _i4 < icon.length; _i4++) {
			_loop2(_i4);
		}
	}
	icons(iconsMini, iconsBig);

	//calcWiHe

	var width = document.getElementById('width'),
	    height = document.getElementById('height');

	function check(elem) {
		elem.addEventListener('keyup', function () {
			this.value = this.value.replace(/[^\d]/, '').substr(0, 6);
		});
	}
	check(width);
	check(height);
	width.addEventListener('change', function () {
		info.widthInfo = width.value;
	});
	height.addEventListener('change', function () {
		info.heightInfo = height.value;
	});

	//calcCheckBox

	var checkBox = document.querySelectorAll('.checkbox');

	checkBox[0].addEventListener('click', function (e) {
		info.temp = 'cold';
		checkBox[1].checked = false;
	});
	checkBox[1].addEventListener('click', function (e) {
		info.temp = 'warm';
		checkBox[0].checked = false;
	});

	var select = document.getElementById('view_type');

	select.addEventListener('change', function () {
		info.typeInfo = select.value;
	});

	//ObjCalc
	var a = void 0,
	    b = void 0,
	    c = void 0,
	    d = void 0,
	    e = void 0;
	var info = {
		form: e,
		widthInfo: a,
		heightInfo: b,
		typeInfo: c,
		temp: d

		//Calc -->


		//Forms

	};var message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Скоро мы с вами свяжемся.';
	message.failure = 'Что то пошло не так...';

	var form = document.getElementsByClassName('form'),
	    input = void 0,
	    statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	for (var _i5 = 0; _i5 < form.length; _i5++) {
		input = form[_i5].getElementsByTagName('input');
	}

	function sendForm(elem) {
		elem.addEventListener('submit', function (e) {
			e.preventDefault();
			elem.appendChild(statusMessage);
			var formData = new FormData(elem);

			function postData(data) {
				return new Promise(function (resolve, reject) {
					var request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								resolve();
							} else {
								reject();
							}
						}
					};
					request.send(data);
				});
			}
			postData(formData).then(function () {
				return statusMessage.style.color = 'black';
			}).then(function () {
				return statusMessage.innerHTML = message.loading;
			}).then(function () {
				return statusMessage.innerHTML = message.success;
			}).catch(function () {
				return statusMessage.innerHTML = message.failure;
			});
		});
	}
	function clearInput() {
		for (var _i6 = 0; _i6 < input.length; _i6++) {
			input[_i6].value = '';
		}
	}

	for (var _i7 = 0; _i7 < form.length; _i7++) {
		sendForm(form[_i7]);
		clearInput();
	}

	var phone = document.getElementsByName('user_phone');

	for (var _i8 = 0; _i8 < phone.length; _i8++) {
		phone[_i8].addEventListener('keyup', function () {
			this.value = this.value.replace(/[^\d]/, '').substr(0, 11);
		});
	}

	//Timer

	var deadline = '2018-07-06';

	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
		    seconds = Math.floor(t / 1000 % 60),
		    minutes = Math.floor(t / 1000 / 60 % 60),
		    hours = Math.floor(t / (1000 * 60 * 60));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id) {
		var endtime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : deadline;

		var timer = document.getElementById(id),
		    hours = timer.querySelector('.hours'),
		    minutes = timer.querySelector('.minutes'),
		    seconds = timer.querySelector('.seconds');

		function updateClock() {
			var t = getTimeRemaining(endtime);
			hours.innerHTML = t.hours;
			if (hours.innerHTML < 10) hours.innerHTML = '0' + hours.innerHTML;
			minutes.innerHTML = t.minutes;
			if (minutes.innerHTML < 10) minutes.innerHTML = '0' + minutes.innerHTML;
			seconds.innerHTML = t.seconds;
			if (seconds.innerHTML < 10) seconds.innerHTML = '0' + seconds.innerHTML;

			var timeInterval = setInterval(updateClock, 1000);

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

	//ClickPicture

	var divPicture = document.createElement('div'),
	    imgPicture = document.createElement('img'),
	    zoom = document.getElementsByClassName('zoom'),
	    zoomPic = document.querySelectorAll('.zoom > a'),
	    ourWorks = document.querySelector('.works');

	divPicture.classList.add('div_picture');
	imgPicture.classList.add('div_picture_img');

	var _loop3 = function _loop3(_i9) {
		zoom[_i9].addEventListener('click', function (event) {
			event.preventDefault();
			divPicture.style.display = 'flex';
			ourWorks.appendChild(divPicture);
			divPicture.appendChild(imgPicture);
			for (var _i10 = 0; _i10 < zoomPic.length; _i10++) {
				zoomPic[_i10].getAttribute('href');
			}
			imgPicture.setAttribute('src', zoomPic[_i9].href);
		});
	};

	for (var _i9 = 0; _i9 < zoom.length; _i9++) {
		_loop3(_i9);
	}

	divPicture.addEventListener('click', function (event) {
		var target = event.target;
		if (target == divPicture) {
			divPicture.style.display = 'none';
		}
	});
});