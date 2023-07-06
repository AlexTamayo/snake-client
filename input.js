/*
Arrow : '\u001b[A'
Arrow Down: '\u001b[B'
Arrow Right: '\u001b[C'
Arrow Left: '\u001b[D'

w = "Move: up"

a = "Move: left"

s = "Move: down"

d = "Move: right"
*/

// Stores the active TCP conenction object.
let connection;

// Setup interface to handle user input from stdin
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u001b[A') {
    connection.write("Move: up");
  }
  if (key === '\u001b[B') {
    connection.write("Move: down");
  }
  if (key === '\u001b[C') {
    connection.write("Move: right");
  }
  if (key === '\u001b[D') {
    connection.write("Move: left");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };