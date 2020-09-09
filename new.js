//breakout - write a function to find out if any of the apple types include the word red - if they do return that type. The function should be reusable so that we can search for any string - 8 mins

let apples = [
	"Jonagold",
	"Cameo",
	"Empire",
	"McIntosh",
	"Golden Delicious",
	"Fuji",
	"Cortland",
	"Red Delicious",
	"Gala",
	"Granny Smith",
	"Braeburn",
	"Honeycrisp"
];
function redApples(array) {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].includes("Red")) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}
console.log(redApples(apples));
