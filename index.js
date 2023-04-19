const express = require("express");
const app = express();
const { authCourse, authPage } = require("./middlewares");

app.use(express.json());

app.get("/home", (req, res) => {
  res.json("HOME PAGE");
});

app.get("/course/grades", authPage(["teacher", "admin"]), (req, res) => {
  res.json({
    pedro: 100,
    paulo: 95,
    leo: 34,
    colin: 67,
  });
});

app.get("/course/:number", authCourse, (req, res) => {
  const courseNumber = req.params.number;
  res.json(`YOU HAVE PERMISSION TO SEE COURSE ${courseNumber}`);
});

app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001");
});
