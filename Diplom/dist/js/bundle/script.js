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
		for (var i = 0; i < calcBtn.length; i++) {
			calcBtn[i].addEventListener('click', function () {
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
		});
		for (var i = 0; i < closeCalc.length; i++) {
			closeCalc[i].addEventListener('click', function () {
				modal.style.display = 'none';
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
		var _loop2 = function _loop2(_i2) {
			icon[_i2].addEventListener('click', function (e) {
				e.preventDefault();
				info.form = e.target;
				for (var _j2 = 0; _j2 < icon.length; _j2++) {
					if (_j2 == _i2) {
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

		for (var _i2 = 0; _i2 < icon.length; _i2++) {
			_loop2(_i2);
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


		//Timer


		//ClickPicture

	};var clickImg = document.getElementsByClassName('zoom');

	console.log(clickImg);
});