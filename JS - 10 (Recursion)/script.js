// Simple recursion

let a = 0;

function rec() {
	a+=3;
	console.log(a);
	if (a > 99) {
		return a;
	}
	rec();
}

rec();

// Recursion for the box

let offset = 0;

function move() {
	offset = offset + 5;
	document.querySelector('.test-2').style.left = offset + 'px';
	if (offset > 200) {
		return true;
	}
	setTimeout(move, 25);
}

document.querySelector('button').onclick = move;