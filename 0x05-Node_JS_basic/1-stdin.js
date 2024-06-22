console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const input = data.trim();
  if (input.length > 0) {
    process.stdout.write(`Your name is: ${input}\n`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
