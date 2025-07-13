import process from "node:process";

const args = process.argv;
const lengthOfArgs = args.length;

if (lengthOfArgs === 2) {
    console.log("No argument")
} else if (lengthOfArgs === 3) {
    console.log("Argument found")
} else {
    console.log("Arguments found")
}