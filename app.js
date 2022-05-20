const express = require("express");
const bodyParser = require("body-parser");
const bootcampRouter = require("./routes/bootcamp-router");
const app = express();
const PORT = process.env.PORT || 5000;

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routeing
app.use("/api/bootcamp", bootcampRouter);

// server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
