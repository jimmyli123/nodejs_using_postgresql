const express = require("express");
const dbRouter = require("./routes/dbRouter");
const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // This lets us read the req.body

app.use("/", dbRouter);





const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Server is running on ${PORT}.`))