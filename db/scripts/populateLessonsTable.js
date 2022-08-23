import {pool} from "../index.js";
import lessons from "../../libs/lessons.js";

async function populateLessonsTable() {
    for (let i = 0; i < lessons.length; i++) {
        const lesson = lessons[i];
        const sqlString = `INSERT INTO lessons (name, topic, description, zoom, paypalEmail, dateTime, duration, starRating) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
        const values = [lesson.name, lesson.topic, lesson.description, lesson.zoom, lesson.paypalemail, lesson.datetime, lesson.duration, lesson.starrating];
        const res = await pool.query(sqlString, values);
        console.log(res.rows[i]);
    }}

    populateLessonsTable();
    

// const sqlString = `CREATE TABLE IF NOT EXISTS lessons (lesson_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, topic TEXT, description TEXT, zoom TEXT, paypalemail TEXT, datetime TEXT, duration INT, starrating INT, badge1 TEXT, badge2 TEXT, badge3 TEXT, level TEXT, extra TEXT);`; // YYYY-MM-DD HH:MM:SS

// Change data and run to add more to database:

//  let sqlString = `INSERT INTO lessons (name, topic, description, zoom, paypalemail, datetime, duration, starrating) VALUES ('Alex Martin', 'javascript tutorial for everyone', '60 minutes to launch your personal JS project!', 'http://zoom.com', 'calumislam@example.com', '2022-07-25T11:30', 30, 3)`
 
// let sqlString = `DROP TABLE lessons`


    // function poolQuery(string) {
    //     return pool.query(string)
    // }
    // poolQuery(sqlString)

/** 
    {
            
        "name": "John Smith",
        "topic": "how to create html",
        "description": "In this lesson I will show you simple html",
        "zoom": "http://zoom.com",
        "paypalemail": "test@example.com",
        "datetime": "2022-06-25T17:30",
        "duration": 30,
        "starrating": 5
    },
    {
        
        "name": "Laura Jones",
        "topic": "All you need to know about js",
        "description": "Just 30 minutes and you will be a pro!",
        "zoom": "http://zoom.com",
        "paypalemail": "test2@example.com",
        "datetime": "2022-07-30T19:30",
        "duration": 30,
        "starrating": 5
    },
    {
        
        "name": "Randy White",
        "topic": "Python basics in 3 easy steps",
        "description": "60 minutes to launch your personal development!",
        "zoom": "http://zoom.com",
        "paypalemail": "test3@example.com",
        "datetime": "2022-06-29T18:00",
        "duration": 30,
        "starrating": 3
    },
    {
        
        "name": "Mike Tyson",
        "topic": "Everyone's got a SQL Query Until they get punched in the mounth",
        "description": "Why I decided to join a coding bootcamp! I'm humbled",
        "zoom": "http://zoom.com",
        "paypalemail": "mike@example.com",
        "datetime": "2022-07-25T11:30",
        "duration": 45,
        "starrating": 5
    },
    {
        
        "name": "Britney Spears",
        "topic": "Query my database One More Time",
        "description": "Today I will teach you how to write a lyrics using JS A.I",
        "zoom": "http://zoom.com",
        "paypalemail": "britney@example.com",
        "datetime": "2022-06-20T15:00",
        "duration": 30,
        "starrating": 5
    }
    */