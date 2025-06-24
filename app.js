const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const app = express();
const assetsPath = path.join(__dirname, "public");
const PORT = 8080;

// Bit for css to work later
app.use(express.static(assetsPath));
console.log("Serving static files from:", assetsPath);
app.use(express.urlencoded({ extended: true }));

// Bit for ejs to work later
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
