const app = require("./app");

// config
require('dotenv').config({ path: "./config/config.env" });

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});