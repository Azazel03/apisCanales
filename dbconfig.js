const mysql = require("mysql2");

const database = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10712303',
    password: 'AjJJ2BhnC4',
    database: 'sql10712303'
});

database.connect((err) => {
    if(err){
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('DB connect Ok');
});

module.exports = database;