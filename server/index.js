const express = require("express");
const itemRoutes = require('./routes/userRoutes')
const postRouter=require('./routes/postRoutes')
const db = require('./database-mongo');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/../client/dist"))
app.use(bodyParser.json());
app.use("/api/post",postRouter)
app.use("/api/user", itemRoutes)

app.listen(PORT, function () {
  console.log("listening on port 3000!")
});
