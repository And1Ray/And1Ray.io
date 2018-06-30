window.addEventListener('DOMContentLoaded', function () {

//Modal

	let btnPopupEngineer = document.querySelector('.popup_engineer_btn'),
			phoneLink = document.querySelector('.phone_link'),
			modalPopupEngineer = document.querySelector('.popup_engineer'),
			closeButton = document.getElementsByClassName('popup_close')[0],
			closeButtonEngineer = document.getElementsByClassName('popup_close')[1],
			modalPopup = document.querySelector('.popup');


	function modalWindowOpenClose (elem, value, modal) {
		elem.addEventListener('click', () => {
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
	modalWindowOpenClose (closeButtonEngineer, 'none', modalPopupEngineer);

	modalWindowOpenClose(phoneLink, 'flex', modalPopup);
	modalWindowOpenClose (closeButton, 'none', modalPopup);


	function sixtySeconds(modal) {
  	modalPopup.style.display = 'flex';
	}
	setTimeout(sixtySeconds, 60000);







});