import {pool} from "../index.js"

// Need all properties for creating new lesson}
// lesson-id, name, topic, description, zoom link, paypal email, date time, duration, star-rating


const sqlString = `CREATE TABLE IF NOT EXISTS lessons (lesson_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, topic TEXT, description TEXT, zoom TEXT, paypalEmail TEXT, dateTime timestamp, duration INT, starRating INT);`;

async function createLessonsTable(){
    const res = await pool.query(sqlString);
    console.log(res)
}

createLessonsTable()