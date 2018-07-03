window.addEventListener('DOMContentLoaded', function () {

//Modal

	let btnPopupEngineer = document.querySelector('.popup_engineer_btn'),
			phoneLink = document.querySelectorAll('.phone_link'),
			modalPopupEngineer = document.querySelector('.popup_engineer'),
			closeButton = document.querySelectorAll('.popup_close'),
			modalPopup = document.querySelector('.popup');


	function modalWindowOpenClose (elem, value, modal) {
		elem.addEventListener('click', (e) => {
			e.preventDefault();
			modal.style.display = value;
		});

		modal.addEventListener('click', function(event) {
				let target = event.target;
				if (target == this) {
					modal.style.display = 'none';
			}
		});
	}

	modalWindowOpenClose (btnPopupEngineer, 'flex', modalPopupEngineer);
	modalWindowOpenClose (closeButton[1], 'none', modalPopupEngineer);

	for (let i = 0, j = 0; i < phoneLink.length, j < closeButton.length; i++, j++) {
		modalWindowOpenClose(phoneLink[i], 'flex', modalPopup);
		modalWindowOpenClose (closeButton[j], 'none', modalPopup);
	}

	function sixtySeconds(modal) {
  	modalPopup.style.display = 'flex';
	}
	setTimeout(sixtySeconds, 60000);


	//Tabs

	let tabGlazing = document.getElementsByClassName('glazing_slider_tab'),
			tabContentGlazing = document.getElementsByClassName('tab_content_link');

	let tabDecoration = document.getElementsByClassName('decoration_tab'),
			tabContentDecoration = document.getElementsByClassName('tab_content_decoration');

	function tabs (tab, tabContent, classen) {
		for (let i = 0; i < tab.length; i++) {
			tab[i].addEventListener('click', function() {
				for (let j = 0; j < tab.length; j++) {
					if (j == i) {
						tab[j].classList.add(classen);
						tabContent[j].style.display = 'block';
					} else {
						tab[j].classList.remove(classen);
						tabContent[j].style.display = 'none';
					}
				}
			});
		}
	}

	tabs(tabGlazing, tabContentGlazing, 'active');
	tabs(tabDecoration, tabContentDecoration, 'after_click');


	//Calc

		//ModalCalc

	let calcBtn = document.getElementsByClassName('popup_calc_btn'),
			popupCalcBtn = document.getElementsByClassName('popup_calc_button')[0],
			popupCalcProfileBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
			modalCalc = document.getElementsByClassName('popup_calc')[0],
			modalCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
			modalCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
			closeCalc = document.getElementsByClassName('popup_calc_close');


			console.log(popupCalcBtn);

		
		function addCalc() {
			for (var i = 0; i < calcBtn.length; i++) {
				calcBtn[i].addEventListener('click', () => {
					modalCalc.style.display = 'flex';
				});
			closeCalc[0].addEventListener('click', () => {
				modalCalc.style.display = 'none';
			});
			}
		}
		addCalc();

		function calcMod(btn, modal, modalprev) {
			btn.addEventListener('click', () => {
				modal.style.display = 'flex';
				modalprev.style.display = 'none';
			});
			for (var i = 0; i < closeCalc.length; i++) {
				closeCalc[i].addEventListener('click', () => {
					modal.style.display = 'none';
				});
			}
		}

		calcMod(popupCalcBtn, modalCalcProfile, modalCalc);
		calcMod(popupCalcProfileBtn, modalCalcEnd, modalCalcProfile);
	
		//CalcPopupModal

		let iconsMini = document.getElementsByClassName('mini_img'),
				iconsBig = document.getElementsByClassName('big_png');


		


});