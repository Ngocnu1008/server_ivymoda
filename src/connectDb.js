require("dotenv").config();

const pgp = require("pg-promise")();

const connect = process.env.DATABASE_URL;

const db = pgp(connect); 

db.connect()
    .then(() => console.log("connect db sucessfully"))
    .catch((err) => console.error(err));
    
module.exports = db;