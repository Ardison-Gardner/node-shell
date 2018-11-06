const pwd = require('./pwd');
const ls = require('./ls');

//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event files after a user types in a line
process.stdin.on('data', (data) => {

  const cmd = data.toString().trim();

  process.stdout.write(`You typed: ${cmd}`);
  process.stdout.write('\nprompt > ');

  if (cmd === 'pwd') {
    return pwd();
  }

  if (cmd === 'ls') {
    return ls()
  }

})
