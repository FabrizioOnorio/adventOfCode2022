import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString().split(/\r?\n/);
puzzle.pop();
const numberOfTreesInEdges = (puzzle[0].length + puzzle.length - 2) * 2;
let totalCount = numberOfTreesInEdges;

puzzle.forEach((lineOfTrees, index) => {
	if (index > 0 && index < puzzle.length - 1) {
		lineOfTrees.split("").forEach((tree, treeIndex, lineOfTreesArray) => {
      if (treeIndex > 0 && treeIndex < lineOfTreesArray.length - 1) {
        let isVisible = false;
				// check from the top
				if (!isVisible) {
					const checkFromTop = puzzle.slice(0, index);
					let visibleFromTop = true;
					checkFromTop.forEach((line) => {
						if (Number(line[treeIndex]) >= Number(tree)) visibleFromTop = false;
					});
					if (visibleFromTop) isVisible = true;
				}

				if (!isVisible) {
					//check from the right
					const checkFromRight = lineOfTreesArray.slice(treeIndex + 1);
					let visibleFromRight = true;
					checkFromRight.forEach((treeAtTheFront) => {
						if (Number(treeAtTheFront) >= Number(tree)) visibleFromRight = false;
					});
					if (visibleFromRight) isVisible = true;
				}

				// check from the buttom
				if (!isVisible) {
					const checkFromButtom = puzzle.slice(index + 1);
					let visibleFromButtom = true;
					checkFromButtom.forEach((line) => {
						if (Number(line[treeIndex]) >= Number(tree))
							visibleFromButtom = false;
					});
					if (visibleFromButtom) isVisible = true;
				}

				// check from the  left
				if (!isVisible) {
					const checkFromLeft = lineOfTreesArray.slice(0, treeIndex);
					let visibleFromLeft = true;
					checkFromLeft.forEach((treeAtTheFront) => {
						if (Number(treeAtTheFront) >= Number(tree)) visibleFromLeft = false;
					});
					if (visibleFromLeft) isVisible = true;
				}
          // console.log({index, treeIndex, tree, isVisible})
				if (isVisible) totalCount++;
			}
		});
	}
});

console.log(totalCount);
