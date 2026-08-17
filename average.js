const args = process.argv.slice(2);
if (args.length !== 3) {
  console.log('Usage: node average.js <num1> <num2> <num3>');
  console.log('Example: node average.js 10 20 30');
  process.exit(1);
}
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const num3 = parseFloat(args[2]);
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.error('Error: All inputs must be valid numbers');
  process.exit(1);
}
const average = (num1 + num2 + num3) / 3;
console.log(`\nValues: ${num1}, ${num2}, ${num3}`);
console.log(`Average: ${average}`);
console.log(`Average (rounded): ${average.toFixed(2)}`);
