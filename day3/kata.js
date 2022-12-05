import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString().split(/\r?\n/);
const alfabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

let completeTypes = [];
completeTypes.push(alfabet);
alfabet.forEach((letter) => {
	completeTypes.push(letter.toUpperCase());
});

completeTypes = completeTypes.flat();
const listOfCommonPriorities = [];
puzzle.forEach((string) => {
	const firstRack = string.slice(0, string.length / 2);
	const secondtRack = string.slice(string.length / 2, string.length);
	completeTypes.forEach((letter) => {
		if (firstRack.includes(letter) && secondtRack.includes(letter)) {
			listOfCommonPriorities.push(completeTypes.indexOf(letter) + 1);
		}
	});
});
const result = listOfCommonPriorities.reduce((acc, curr) => acc + curr, 0);
// solution 1

console.log(result);
const listOfCommonPriorities2 = [];
let memberCount = 0;
puzzle.forEach((_string, index, puzzle) => {
	memberCount++;
	if (memberCount === 2) {
		completeTypes.forEach((letter) => {
			const condition =
				puzzle[index - 1].includes(letter) &&
				puzzle[index].includes(letter) &&
				puzzle[index + 1].includes(letter);
			if (condition)
				listOfCommonPriorities2.push(completeTypes.indexOf(letter) + 1);
		});
	}
	if (memberCount === 3) memberCount = 0;
});
const result2 = listOfCommonPriorities2.reduce((acc, curr) => acc + curr, 0);
// solution 2
console.log(result2);
