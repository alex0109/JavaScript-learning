const summ = () => {
	const out = document.querySelector('#out');
	let num1 = document.querySelector('#num1');
	let num2 = document.querySelector('#num2');

	out.innerHTML = parseInt(num1.value) + parseInt(num2.value)
};

const palindrom = () => {
	const out = document.querySelector('#out1');
	let str = document.querySelector('#str').value.toLowerCase();

	revStr = str.split('').reverse().join('').toLowerCase();

	return revStr == str ? out.innerHTML = 'Да' : out.innerHTML = 'Нет';
};

const createArr = () => {
	const out = document.querySelector('#out2');
	let num1 = document.querySelector('#num3').value;
	let num2 = document.querySelector('#num4').value;

	let array = []

	for(let i = num1; i < num2; i++) {
		array.push(i);
	}

	out.innerHTML = array;
};

const double = () => {
	const out = document.querySelector('#out2');
	let num1 = document.querySelector('#num3').value;
	let num2 = document.querySelector('#num4').value;

	let array = []

	for(let i = num1; i < num2; i++) {
		if (i % 2 == false) array.push(i);
	}

	out.innerHTML = array;
};

const notDouble = () => {
	const out = document.querySelector('#out2');
	let num1 = document.querySelector('#num3').value;
	let num2 = document.querySelector('#num4').value;

	let array = []

	for(let i = num1; i < num2; i++) {
		if (i % 2) array.push(i);
	}

	out.innerHTML = array;
}

const count = document.querySelector('#count');

document.querySelector('#plus').onclick = () => {
	let countPlus = count.innerHTML++;
}

document.querySelector('#minus').onclick = () => {
	let countMinus = count.innerHTML--;
}