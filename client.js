/*

The credentials for it are:

Web view: http://165.227.47.243:8081/
IP for client : 165.227.47.243
Port for client : 50541

Use the IP and PORT for your snek client, use the web view to see the snake UI 🐍

Good Luck 🐍 🐍 🐍


"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)

*/


const net = require("net");

// establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret income data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: @AT`);
  });
  

  return conn;
};

console.log("Connecting ...");
// connect();

module.exports = {connect};