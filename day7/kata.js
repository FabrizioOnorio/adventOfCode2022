import { readFileSync } from "fs";
const puzzle = readFileSync("./input.txt").toString().split(/\r?\n/);

const executeCommand = (command, currentDir) => {
	if (command.at(0) === "$") {
		const [, ist, target] = command.split(" ");
		if (ist === "cd") {
			switch (target) {
				case "/": // CREATE ROOT
					return { name: "/", subDirectories: [], files: [] };
				case "..": // GO TO PARENT DIR
					return currentDir.parent;
				default: // GO TO SUB DIR
					return currentDir.subDirectories.find((d) => d.name === target);
			}
		}
		return currentDir;
	}
	const [size, name] = command.split(" ");
	if (size === "dir") {
		currentDir.subDirectories.push({
			name,
			subDirectories: [],
			files: [],
			parent: currentDir,
		});
	} else {
		currentDir.files.push({ name, size: parseInt(size) });
	}
	return currentDir;
};

const filesSize = (dir) => dir.files.reduce((acc, curr) => acc + curr.size, 0);

const directorySize = (dir) =>
	dir.subDirectories.reduce(
		(acc, curr) => acc + directorySize(curr),
		filesSize(dir)
	);

const buildDirectoryTree = (commands) => {
	const dirs = new Set([]);
	let currentDir;
	commands.forEach((command) => {
		currentDir = executeCommand(command, currentDir);
		dirs.add(currentDir);
	});
	return dirs;
};
