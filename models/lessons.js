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
