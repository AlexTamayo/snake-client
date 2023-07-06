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

const { CONTROLKEYS, MESSAGES } = require('./constants');

// Stores the active TCP conenction object.
let connection;

// Setup interface to handle user input from stdin
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  /* MOVE KEYS */
  const controlKeys = Object.keys(CONTROLKEYS)
    .find(k => CONTROLKEYS[k] === key);

  if (controlKeys) {
    connection.write(`Move: ${controlKeys}`);
  }

  /* MESSAGES KEY */
  // const keymapping = Object.keys(KEYMAPPING)
  //   .find(k => KEYMAPPING[k].toLowerCase() === key.toLowerCase());

  const messages = Object.keys(MESSAGES);

  const messageKey = messages.find(k => k === key.toLowerCase());

  if (messageKey) {
    connection.write(`Say: ${MESSAGES[messageKey]}`);
  }

  // if (key === 'A' || key === 'a') {
  //   connection.write("Say: GET TO THE CHOPPA, NOWH!!");
  // }

  // if (key === 'S' || key === 's') {
  //   connection.write("Say: SSSSSSSSHHH");
  // }

  // if (key === 'W' || key === 'w') {
  //   connection.write("Say: Alex number 1");
  // }

  // if (key === 'D' || key === 'd') {
  //   connection.write("Say: I'm Rick James B***ch!");
  // }

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



/*


Are you able to tell me why ` if (keymapping) {connection.write(`Say: ${keymapping}`);}` isn't working here?

const KEYMAPPING = {
  'a': 'GET TO THE CHOPPA, NOWH!!',
  'A': 'GET TO THE CHOPPA, NOWH!!',
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  const controlKeys = Object.keys(CONTROLKEYS)
    .find(k => CONTROLKEYS[k] === key);

  if (controlKeys) {
    connection.write(`Move: ${controlKeys}`);
  }

  const keymapping = Object.keys(KEYMAPPING)
    .find(k => KEYMAPPING[k] === key);

  if (keymapping) {
    connection.write(`Say: ${keymapping}`);
  }
};




*/