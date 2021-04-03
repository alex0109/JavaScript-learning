function t1() {
	let a = 0;
	return function() {
		a = a + 1;
		return a;
	}
}

let b = t1();

let c = t1();

console.log(b());	// 1
console.log(c());	// 1
console.log(b());	// 2
console.log(c());	// 2
console.log(b());	// 3
console.log(c());	// 3
