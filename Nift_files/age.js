let ageEl = document.getElementById('age');
const birthday = dayjs('2001-03-20');

setInterval(() => {
	let time = dayjs().diff(birthday, 'year', true);
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);
