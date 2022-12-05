import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString().split(/\r?\n/);

const arrayOfSums = [];
let elf = [];
puzzle.forEach((calories) => {
	if (calories === "") {
		arrayOfSums.push(elf);
		elf = [];
	}
	if (calories !== "") elf.push(calories);
});

const arrayofElfs = [];
arrayOfSums.forEach((elf) => {
	arrayofElfs.push(elf.reduce((acc, curr) => acc + Number(curr), 0));
});

const sotedElfs = arrayofElfs.sort((a, b) => a - b);
const indexOfHighest = sotedElfs.length - 1;
const secondHighest = sotedElfs.length - 2;
const thirdHighest = sotedElfs.length - 3;
// solution 1
console.log(sotedElfs[indexOfHighest]);
// solution 2
console.log(
	sotedElfs[indexOfHighest] + sotedElfs[secondHighest] + sotedElfs[thirdHighest]
);
