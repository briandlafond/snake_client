const net = require('net');
const stdin = process.stdin;

/**
 * Establishes connection with the game server
 */

const connect = function() {
    const conn = net.createConnection({
        host: '135.23.222.131',
        port: 50542
    });

    conn.setEncoding('utf8'); // interpret incoming data as text

    conn.on('connect', function() { // event listener , event handler (callback)
        console.log("Successfully connected to game server");
        conn.write('Name: BDL'); //.write method sends reply to server
    })
    return conn;
}


module.exports = connect; // exports connect function