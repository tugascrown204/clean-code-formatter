const fs = require('fs');
const path = require('path');

/**
 * Formats the code by normalizing whitespace.
 * @param {string} filePath - The path to the code file to be formatted.
 * @returns {string} - The formatted code.
 */
function formatCode(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');
  // Example formatting - this should include clean code principles
  const formattedCode = code.replace(/\s+/g, ' ').trim(); // Simple whitespace normalization
  return formattedCode;
}

/**
 * Prints a report comparing original and formatted code.
 * @param {string} originalCode - The original unformatted code.
 * @param {string} formattedCode - The formatted code.
 */
function printReport(originalCode, formattedCode) {
  console.log('--- Original Code ---');
  console.log(originalCode);
  console.log('--- Formatted Code ---');
  console.log(formattedCode);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Please provide a code file to format.');
    process.exit(1);
  }
  const filePath = path.resolve(args[0]);
  if (!fs.existsSync(filePath)) {
    console.error('File does not exist.');
    process.exit(1);
  }

  const originalCode = fs.readFileSync(filePath, 'utf-8');
  const formattedCode = formatCode(filePath);

  printReport(originalCode, formattedCode);
}

main();