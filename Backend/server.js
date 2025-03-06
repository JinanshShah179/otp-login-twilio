const express = require("express");
const bodyParser = require("body-parser");
const { connect } = require("./db");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use("/auth", authRoutes);

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
