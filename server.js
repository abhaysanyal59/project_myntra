const connectDB = require("./db/db");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
