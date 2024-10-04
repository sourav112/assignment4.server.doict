const express=require("express");
const cors=require("cors");

const app=express();
const port = process.env.port || 5000;

const course=require("./data/course.json");
app.use(cors());

app.get('/', (req, res) => {
  res.send('Assignment 4 Server Started!!')
})

app.get('/course', (req, res) => {
    res.send(course);
  })

  app.get("/course/:id", (req, res) => {
    id = req.params.id;
    console.log(id);
    const selectedCourse = course.find((n) => n.course_id === id);
    res.send(selectedCourse);
  });

app.listen(port, () => {
  console.log(`Assignment 4 Server listening on port ${port}`)
})