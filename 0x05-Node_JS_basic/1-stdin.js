process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdin.end();
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});