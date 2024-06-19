process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
    const input = data.trim();

    if (input.length > 0) {
        process.stdout.write(`Your name is: ${input}\n`);
        process.exit(0);
    }
});