const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app. use(cors());
app.use(express.json());

//middleware
app.use(express.static(path.join(__dirname, "../public")));


//endpoint which I dont need since im using middleware
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`I think we are on port ${port}`);
});

