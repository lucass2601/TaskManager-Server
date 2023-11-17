const express = require("express");
const app = express();
const port = 3000;

const db = require("./db");

app.get("/", (request, response) => {
  db.pool.query("SELECT * FROM tasks", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
