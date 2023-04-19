const express = require("express");
const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.json("HOME PAGE");
});

app.get("/course/grades", (req, res) => {
  res.json({
    pedro: 100,
    paulo: 95,
    leo: 34,
    colin: 67,
  });
});

app.get("/course/:number", (req, res) => {
  const courseNumber = req.params.number;
  res.json(`YOU HAVE PERMISSION TO SEE COURSE ${courseNumber}`);
});

app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001");
});
