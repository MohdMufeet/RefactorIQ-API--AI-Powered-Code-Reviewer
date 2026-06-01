const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/app.js");
// const cors = require("cors");


// const corsOptions = {
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
