const first = process.argv[2];
const isNumber = !isNaN(Number(first))

if (isNumber) {
    console.log(`My number: ${Number.parseInt(first)}`)
} else {
    console.log("Not a number")
}