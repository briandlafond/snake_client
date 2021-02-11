const net = require('net');
const stdin = process.stdin;
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */

const connect = function() {
    const conn = net.createConnection({
        host: IP,
        port: PORT
    });

    conn.setEncoding('utf8'); // interpret incoming data as text

    conn.on('connect', function() { // event listener , event handler (callback)
        console.log("Successfully connected to game server");
        conn.write('Name: BDL'); //.write method sends reply to server

        conn.on('data', (data) => {
            console.log('Server says:', data);
        });

    })
    return conn;
}


module.exports = connect; // exports connect function