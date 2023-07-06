const c = require('./client');

// Setup interface to handle user input from stdin


const handleUserInput = function() {
  // code

  
  
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  stdin.on('data', (key) => {
    process.stdout.write('.');
  
    if (key === '\u0003') {
      process.exit();
    }
  });
  return stdin;

};


setupInput();
c.connect();
