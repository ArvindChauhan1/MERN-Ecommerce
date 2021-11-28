const app = require("./app");
const connectDatabase = require('./config/databse');

// config
require('dotenv').config({ path: "backend/config/config.env" });

// connecting database
connectDatabase();



app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});