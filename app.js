import express from "express";
let app = express();
let port = 3000;

app.get("", (req, res) => {

    res.send("Jenkins Zindabaad");
});

app.listen(port, () => {
    console.log("Jenkins app running at", port);
});