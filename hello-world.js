let a = 5;
console.log("a: " + a);
a = a + 5;
console.log("a: " + a);
const PI = 3.14;
console.log("PI: " + PI);

let num = 5;
let str = "Hello World";
let str2 = "Hello Again";
let bool = true;
let arr = [1, 1, 2, 3, 5, 8];
let teletubbies = ["tinky winky", "dipsy", "lala", "poe"];
console.log("arr[2] = " + arr[2]);
console.log("teletubbies[0] = " + teletubbies[0]);

let human = {
	first_name: "John",
	last_name: "Doe",
	age: 20
};

console.log("human.first_name = " + human.first_name);

let anotherHuman = {
	name: "Manud",
	address: {
		country: "Thailand",
		province: "Bangkok"
	},
	friends: ["Cat", "Dog", "Bird"]
};
console.log("anotherHuman.address.country = " + anotherHuman.address.country);
function greeting(name) {
	console.log("Hello " + name);
}
function add(num1, num2) {
	return num1 + num2;
}

greeting("World!");

const num3 = add(1, 2);
console.log(num3);
