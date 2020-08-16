import path from "path";
import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import dotenv from "dotenv";

import mongoose from "mongoose";

import apiRouter from "./apiRouter";

dotenv.config();

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

const { MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE } = process.env;

mongoose
    .connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-r22i4.mongodb.net/${MONGO_DATABASE}`)
    .then(() => {
        app.listen(5000, () => {
            console.log("Server started on 5000");
        });
    })
    .catch(err => console.log(err));
