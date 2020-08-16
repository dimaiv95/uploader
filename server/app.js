import fs from "fs";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

import apiRouter from "./apiRouter";

const app = express();

const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, path.join(__dirname, "images/"))
    },
    filename (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});
const uploadFiles = multer({ storage: storage });

app.use(express.static(path.join(__dirname, "../client/public")));
app.use("/images", express.static(path.join(__dirname, "images/")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.status(200).sendFile("index.html");
});

app.use("/api", uploadFiles.single("files"), apiRouter);

app.use((req, res, next) => {
    res.status(404).send("Not found");
});

app.listen(5000, () => {
    console.log("Server started on 5000");
});