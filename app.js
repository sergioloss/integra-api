var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'employees'
});

connection.connect();

connection.query('select * from employees limit 100;', function (err, rows, fields) {
    if (!err) {
        console.log('rows: ', rows);
    } else {
        console.log('error');
    }
});

connection.end();