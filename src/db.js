import mysql from 'mysql'

var db_config = {
	connectionLimit : 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "drapshopweb_db"
};

var db;
db = mysql.createPool(db_config);
db.getConnection(function(err, connection) {
    if (err !== null) {
		let o = {msg: false, message: err.message}
		return console.error("error:", o);      
    } else {
        connection.release();
    }
});

module.exports = db;