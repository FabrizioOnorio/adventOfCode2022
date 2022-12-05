import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString().split(/\r?\n/);

const stacksFixer = (array) => {
	const correctStack = [];
	array.forEach((element) => {
		if (element !== "") {
			correctStack.push(element);
			correctStack.push(" ");
		} else {
			correctStack.push(element);
		}
	});
	return correctStack;
};

const indexOfLineBreak = puzzle.indexOf("");
const stacks = puzzle[indexOfLineBreak - 1].split(" ");
const correctStack = stacksFixer(stacks);
const numberOfStacks = Number(correctStack[correctStack.length - 2]);
const arrayOfStacks = [];
for (let i = 1; i <= numberOfStacks; i++) arrayOfStacks.push([]);

correctStack.forEach((element, index) => {
	if (element !== "") {
		for (let i = 0; i < indexOfLineBreak - 1; i++) {
			if (
				puzzle[i].split("")[index] !== " " &&
				puzzle[i].split("")[index] !== undefined
			)
				arrayOfStacks[element - 1]?.push(puzzle[i].split("")[index]);
		}
	}
});

const arrayOfMoves = puzzle.slice(indexOfLineBreak + 1);

arrayOfMoves.forEach((move) => {
	const moveStringToArray = move.split(" ").filter((x) => /[0-9]+/.test(x));
	const quantity = Number(moveStringToArray[0]);
	const initialStack = Number(moveStringToArray[1]);
	const finalStack = Number(moveStringToArray[2]);
	for (let i = 1; i <= quantity; i++) {
		const removedElement = arrayOfStacks[initialStack - 1].shift();
		arrayOfStacks[finalStack - 1].unshift(removedElement);
	}
});
let solution1 = "";
arrayOfStacks.forEach((element) => {
	solution1 += element[0];
});
// solution 1
console.log(solution1);

const stacks2 = puzzle[indexOfLineBreak - 1].split(" ");
const correctStack2 = stacksFixer(stacks2);
const numberOfStacks2 = Number(correctStack2[correctStack2.length - 2]);
const arrayOfStacks2 = [];
for (let i = 1; i <= numberOfStacks2; i++) arrayOfStacks2.push([]);

correctStack2.forEach((element, index) => {
	if (element !== "") {
		for (let i = 0; i < indexOfLineBreak - 1; i++) {
			if (
				puzzle[i].split("")[index] !== " " &&
				puzzle[i].split("")[index] !== undefined
			)
				arrayOfStacks2[element - 1]?.push(puzzle[i].split("")[index]);
		}
	}
});

const arrayOfMoves2 = puzzle.slice(indexOfLineBreak + 1);
arrayOfMoves2.pop();

arrayOfMoves2.forEach((move) => {
	const moveStringToArray = move.split(" ").filter((x) => /[0-9]+/.test(x));
	const quantity = Number(moveStringToArray[0]);
	const initialStack = Number(moveStringToArray[1]);
	const finalStack = Number(moveStringToArray[2]);
	const removedElements = arrayOfStacks2[initialStack - 1].splice(0, quantity);
	removedElements
		.reverse()
		.forEach((element) => arrayOfStacks2[finalStack - 1].unshift(element));
});
let solution2 = "";
arrayOfStacks2.forEach((element) => {
	solution2 += element[0];
});
// solution 2
console.log(solution2);
