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

	console.log(popupCalcBtn);

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
		});
		for (var i = 0; i < closeCalc.length; i++) {
			closeCalc[i].addEventListener('click', function () {
				modal.style.display = 'none';
			});
		}
	}

	calcMod(popupCalcBtn, modalCalcProfile, modalCalc);
	calcMod(popupCalcProfileBtn, modalCalcEnd, modalCalcProfile);

	//CalcPopupModal

	var iconsMini = document.getElementsByClassName('mini_img'),
	    iconsBig = document.getElementsByClassName('big_png');
});