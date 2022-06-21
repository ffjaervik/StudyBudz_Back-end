import {pool} from "../index.js";

//const sqlString = `CREATE TABLE IF NOT EXISTS lessons (lesson_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, topic TEXT, description TEXT, zoom TEXT, paypalEmail TEXT, dateTime timestamp, duration INT, starRating INT);`; // YYYY-MM-DD HH:MM:SS

// Change data and run to add more to database:
let sqlString = `INSERT INTO lessons (name, topic, description, zoom, paypalEmail, dateTime, duration, starRating)
    VALUES ('Randy White', 'Python basics in 3 easy steps', '60 minutes to launch your personal development!', 'http://zoom.com', 'test3@example.com', '2022-06-24 17:00:00', 30, 3)
    `
    
    function poolQuery(string) {
        return pool.query(string)
    }
    poolQuery(sqlString)


    