let connection;

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    const handleUserInput = function() {
        stdin.on('data', (key) => { //allows for key entry input from user
            if (key === 'w') {
                conn.write('Move: up')
            }
            if (key === 'a') {
                conn.write('Move: left')
            }
            if (key === 's') {
                conn.write('Move: down')
            }
            if (key === 'd') {
                conn.write('Move: right');
            }
            if (key === 'q') {
                conn.write('Say: Whats up!!')
            }
            if (key === '\u0003') { // u0003 maps to control+c 
                process.exit(); // quit the process of running client.js
            }
        });
    }
    handleUserInput()
    return stdin;
}

module.exports = setupInput;