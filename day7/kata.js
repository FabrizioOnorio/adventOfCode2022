import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString().split(/\r?\n/);

puzzle.forEach((command, index) => {
	if (command[2] === "c") {
		const directoryName = `${puzzle[index].split(" ")[2]}`;
		if (directoryName !== "..") {
			directoryName = { childs: [] };
		}
	}
	if (command === "$ ls") {
		const listOfFIles = puzzle.slice(index + 1);
		const nextCommand = listOfFIles.indexOf(
			listOfFIles.find((element) => element[0] === "$")
		);
		const directoryName = `dir ${puzzle[index - 1].split(" ")[2]}`;
		fileStructure[location] = {};
		listOfFIles.splice(nextCommand);
		listOfFIles.forEach((string) => {
			if (string[0] === "d") directoryName = {childs: []};
			if (string[0] !== "d") {
				fileStructure[directoryName][string.split(" ")[1]] = Number([
					string.split(" ")[0],
				]);
			}
		});
	}
});
console.log(fileStructure);
const arrayroot = Object.keys(fileStructure["dir /"]);
const arrayRootFiltered = arrayroot.filter(
	(key) => key.split(" ")[0] === "dir"
);
arrayRootFiltered.forEach((dir) => {
	fileStructure["dir /"][dir] = fileStructure[dir];
});

arrayroot.forEach((string) => {
	const array = Object.keys(fileStructure["dir /"][string]);
	const arrayFiltered = array.filter((key) => key.split(" ")[0] === "dir");
	arrayFiltered.forEach((dir) => {
		fileStructure["dir /"][string][dir] = fileStructure[dir];
	});
});

console.log(fileStructure);
