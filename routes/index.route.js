import express from "express"

const indexRouter = express.Router();

app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Hello World"
    })
})