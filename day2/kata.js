import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString().split(/\r?\n/);

let myPoints = 0;

puzzle.forEach((game) => {
	const elfPlay = game.split(" ")[0];
	const myPlay = game.split(" ")[1];
	if (myPlay === "X" && elfPlay === "A") myPoints += 4;
	if (myPlay === "X" && elfPlay === "B") myPoints += 1;
	if (myPlay === "X" && elfPlay === "C") myPoints += 7;
	if (myPlay === "Y" && elfPlay === "A") myPoints += 8;
	if (myPlay === "Y" && elfPlay === "B") myPoints += 5;
	if (myPlay === "Y" && elfPlay === "C") myPoints += 2;
	if (myPlay === "Z" && elfPlay === "A") myPoints += 3;
	if (myPlay === "Z" && elfPlay === "B") myPoints += 9;
	if (myPlay === "Z" && elfPlay === "C") myPoints += 6;
});

// solution 1
console.log(myPoints);

let myPoints2 = 0;

puzzle.forEach((game) => {
	const elfPlay = game.split(" ")[0];
	const playend = game.split(" ")[1];
	if (playend === "X" && elfPlay === "A") myPoints2 += 3;
	if (playend === "X" && elfPlay === "B") myPoints2 += 1;
	if (playend === "X" && elfPlay === "C") myPoints2 += 2;
	if (playend === "Y" && elfPlay === "A") myPoints2 += 4;
	if (playend === "Y" && elfPlay === "B") myPoints2 += 5;
	if (playend === "Y" && elfPlay === "C") myPoints2 += 6;
	if (playend === "Z" && elfPlay === "A") myPoints2 += 8;
	if (playend === "Z" && elfPlay === "B") myPoints2 += 9;
	if (playend === "Z" && elfPlay === "C") myPoints2 += 7;
});

// solution 2
console.log(myPoints2);
