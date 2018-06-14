window.addEventListener('DOMContentLoaded', function () {

	//Tabs

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

	//Timer

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


	//Modal

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

// New element

	class Options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		newElem() {
			let tag = document.createElement('div');
			tag.textContent = 'Привет';
			tag.style.cssText = `height: ${this.height};\
													 width: ${this.width};\
													 background: ${this.bg};\
													 font-size: ${this.fontSize};\
													 text-align: ${this.textAlign};\
													`;
			document.body.appendChild(tag);
			return tag;
		}
	}

	const div1 = new Options('100px', '100px', 'green', '10px', 'center');
	console.log(div1.newElem());

	const div2 = new Options('150px', '150px', 'red', '20px', 'left');
	console.log(div2.newElem());

});