const app = require("./app");

// config
require('dotenv').config({ path: "backend/config/config.env" });


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});