/*

The credentials for it are:

Web view: http://165.227.47.243:8081/
IP for client : 165.227.47.243
Port for client : 50541

Use the IP and PORT for your snek client, use the web view to see the snake UI 🐍

Good Luck 🐍 🐍 🐍

*/


const net = require("net");
const { IP, PORT, USERNAME } = require("./constants");

// establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret income data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: ${USERNAME}`);
  });
  

  return conn;
};

module.exports = {connect};