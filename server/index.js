const express = require('express')
const path = require("path")
const cors = require('cors')
const app = express();
require('dotenv').config();

app.use(cors({
    origin: "*", // <-- location of the react app were connecting to
    credentials: true,
}));
app.use(express.static(path.resolve(__dirname, "./build")));
app.get("/*", function (req, res) {
    res.sendFile(
        path.resolve(
            __dirname,
            "./build/index.html" || "./client/public/index.html"
        ),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log("server runing on port" + PORT);
});