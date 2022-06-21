import { pool } from "../db/index.js";

export const selectAllLessons = async function () {
  const results = await pool.query("SELECT * FROM lessons");
  return results.rows;
};

export const selectLessonsById = async function (id) {
  const results = await pool.query(
    `SELECT * FROM lessons WHERE lesson_id = ${id};`
  );
  console.log(results.rows);
  return results.rows;
};

async function populateDogsTable() {
  for (let i = 0; i < dogsData.length; i++) {
       const res = await query (
           `INSERT INTO dogs (dog_name, dog_gender, owner_name, email) VALUES ($1, $2, $3, $4) RETURNING *;`, 
           [dogsData[i].dog_name, dogsData[i].dog_gender, dogsData[i].owner_name, dogsData[i].email]
       );
   console.log(res.rows[0],"inserted");
   }
}

