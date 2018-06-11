function time () {
	let classTime = document.getElementsByClassName('time')[0];
	let time = new Date();
	let hh = time.getHours();
	if (hh < 10) hh = '0' + hh;
	let min = time.getMinutes();
	if (min < 10) min = '0' + min;
	let sec = time.getSeconds();
	if (sec < 10) sec = '0' + sec;
	classTime.textContent = hh + ':' + min + ':' + sec;
}
setInterval(time, 1000);