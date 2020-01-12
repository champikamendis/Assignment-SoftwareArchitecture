var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'Ocr-image'
});
 
connection.connect();
 
global.db = connection;