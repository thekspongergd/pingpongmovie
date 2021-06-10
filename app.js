const express = require("express");
const {
  addMovie,
  searchMovie,
  updateMovie,
  sDeleteMovie,
} = require("./src/functions/index");
const connectToDatabase = require("./src/utils/mongo");
const app = express();
const port = 8080;

const connectMongo = async (req, res, next) => {
  await connectToDatabase();
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(connectMongo);


app.get("/moviedetail/:name", async (req, res) => {

  try {
    const movieDetail = await searchMovie(req.params.name);
    res.send(movieDetail);
    console.log("Hello",err);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
});


app.post("/addMovie", async (req, res) => {
  try {
    console.log("req: ", req.body);
    const movie = await addMovie(req.body);
    res.send(movie);
  } catch (err) {
    res.send(err);
  }
});


app.put("/editMovie", async (req, res) => {
  try {
    const upMovie = await updateMovie(req.body);
    res.send(upMovie);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
});


app.delete("/deleteMovie", async (req, res) => {
  try {
    console.log("req: ", req.body);
    const deleteMovie = await sDeleteMovie(req.body);
    res.send(deleteMovie);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});