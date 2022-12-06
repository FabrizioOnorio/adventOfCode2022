import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString();
const strigLength = puzzle.length;
for(let i = 0; i < strigLength; i++) {
  const lettersChunk = [puzzle[i], puzzle[i + 1], puzzle[i + 2], puzzle[i + 3]];
  let counter = 0
  lettersChunk.forEach(letter => {
    const repeatedLetters = lettersChunk.filter(pointedLetter => letter === pointedLetter);
    if (repeatedLetters.length > 1) counter++;
  });
  if (counter === 0) {
    // solution 1
    console.log(i + 4)
    break
  } else {
    counter = 0
  }
}

for (let i = 0; i < strigLength; i++) {
	const lettersChunk = [
		puzzle[i],
		puzzle[i + 1],
		puzzle[i + 2],
		puzzle[i + 3],
		puzzle[i + 4],
		puzzle[i + 5],
		puzzle[i + 6],
		puzzle[i + 7],
		puzzle[i + 8],
		puzzle[i + 9],
		puzzle[i + 10],
		puzzle[i + 11],
		puzzle[i + 12],
		puzzle[i + 13],
	];
	let counter = 0;
	lettersChunk.forEach((letter) => {
		const repeatedLetters = lettersChunk.filter(
			(pointedLetter) => letter === pointedLetter
		);
		if (repeatedLetters.length > 1) counter++;
	});
	if (counter === 0) {
    // solution 2
		console.log(i + 14);
		break;
	} else {
		counter = 0;
	}
}
