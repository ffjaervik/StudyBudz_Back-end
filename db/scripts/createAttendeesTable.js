
import {pool} from "../index.js"

// Need all properties for creating new lesson}
// lesson-id, name, topic, description, zoom link, paypal email, date time, duration, star-rating


const sqlString = `CREATE TABLE IF NOT EXISTS attendees (attendee_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    CONSTRAINT lesson_id
       FOREIGN KEY(lesson_id) 
       REFERENCES lessons(lesson_id)
   );`;
    

async function createAttendeesTable(){
    const res = await pool.query(sqlString);
    console.log(res)
}

createAttendeesTable()


