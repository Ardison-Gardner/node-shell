module.exports = function () {
  const print = process.env.PWD;
  console.log(print);
  process.stdout.write('\nprompt > ');
}
