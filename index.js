require('dotenv').config();
const server = require('./app.js');
const {PORT} = process.env;
const {conn} = require('./db.js');


conn.authenticate().then(() =>{
    console.log('Connection has been established successfully.');
    conn.sync().then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })
    })
}).catch(() => {
    console.error('Unable to connect to the database:', error);
});



