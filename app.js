const express = require("express");
const dbRouter = require("./routes/dbRouter");
const app = express();
require('dotenv').config();
console.log(process.env)

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // This lets us read the req.body

app.use("/", dbRouter);





const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server is running on ${PORT}.`))