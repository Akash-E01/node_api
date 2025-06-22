const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

db.sequelize.sync().then(() => {
  console.log("Synced DB");
}).catch(err => {
  console.log("Failed to sync DB: " + err.message);
});

// Routes
require("./routes/user.routes")(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
