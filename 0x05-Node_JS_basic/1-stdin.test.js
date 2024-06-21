const { exec } = require('child_process');
const { expect } = require('chai');

describe('1-stdin.js', function() {
  it('should prompt for name, print name, and close correctly', function(done) {
    const child = exec('node 1-stdin.js', (error, stdout, stderr) => {
      if (error) {
        done(error);
        return;
      }
      expect(stdout).to.contain('Welcome to Holberton School, what is your name?\n');
      expect(stdout).to.contain('Your name is: John\n');
      expect(stdout).to.contain('This important software is now closing\n');
      done();
    });
    
    // Simulate user input
    child.stdin.write('John\n');
    child.stdin.end();
  });
});