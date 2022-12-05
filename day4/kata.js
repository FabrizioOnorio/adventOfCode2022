import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString().split(/\r?\n/);
puzzle.pop();
let overlapCount = 0;
puzzle.forEach((elfsPair) => {
	const elfAssignmentOneStart = Number(elfsPair.split(",")[0].split("-")[0]);
	const elfAssignmentOneEnd = Number(elfsPair.split(",")[0].split("-")[1]);
	const elfAssignmentTwoStart = Number(elfsPair.split(",")[1].split("-")[0]);
	const elfAssignmentTwoEnd = Number(elfsPair.split(",")[1].split("-")[1]);
	if (
		elfAssignmentOneStart >= elfAssignmentTwoStart &&
		elfAssignmentOneEnd <= elfAssignmentTwoEnd
	) {
		overlapCount++;
	} else if (
		elfAssignmentTwoStart >= elfAssignmentOneStart &&
		elfAssignmentTwoEnd <= elfAssignmentOneEnd
	) {
		overlapCount++;
	}
});
// solution 1
console.log(overlapCount);

let overlapCount2 = 0;
const  range = (a, b) => {
	return [...Array(b - a + 1).keys()].map((x) => x + a);
}

puzzle.forEach((elfsPair) => {
	const elfAssignmentOneStart = Number(elfsPair.split(",")[0].split("-")[0]);
	const elfAssignmentOneEnd = Number(elfsPair.split(",")[0].split("-")[1]);
	const elfAssignmentTwoStart = Number(elfsPair.split(",")[1].split("-")[0]);
	const elfAssignmentTwoEnd = Number(elfsPair.split(",")[1].split("-")[1]);
  const firstRange = range(elfAssignmentOneStart, elfAssignmentOneEnd);
  const secondRange = range(elfAssignmentTwoStart, elfAssignmentTwoEnd);
  let overlaps = 0;
  firstRange.forEach(number => {
    if (secondRange.includes(number)) overlaps++;
  })
  secondRange.forEach(number => {
    if (firstRange.includes(number)) overlaps++;
  })
  if (overlaps > 0) overlapCount2++;
});
// solution 2
console.log(overlapCount2)
