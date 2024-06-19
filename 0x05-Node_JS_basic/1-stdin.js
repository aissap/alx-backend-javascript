process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
    const input = data.toString().trim();

    if (input.length > 0) {
        process.stdout.write(`Your name is: ${input}\n`);
        process.exit();
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});