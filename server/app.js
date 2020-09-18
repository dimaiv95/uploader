import path from "path";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import mongoose from "mongoose";

import discStorage from "./discStorage";
import apiRouter from "./apiRouter";

const {
    NODE_ENV = "development",
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_DATABASE
} = process.env;

const app = express();

app.use(cors());

const storage = discStorage({
    destination (req, file, cb) {
        cb(null, path.join(__dirname, "images"));
    },
    filename (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/png" || 
    file.mimetype === "image/jpg"|| 
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}
const uploadFiles = multer({ storage: storage, fileFilter: fileFilter });

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", uploadFiles.single("images"), apiRouter);

if(NODE_ENV.trim() !== "development"){
    app.use(express.static(path.join(__dirname, "build")));

    app.get("*", (req, res, next) => {
        res.sendFile("index.html", { root: path.join(__dirname, "build") });
    });
}

app.use((error, req, res, next) => {
    const { statusCode = 500, message } = error;
    
    res.status(statusCode).json(message);
});

const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-r22i4.mongodb.net/${MONGO_DATABASE}`;

mongoose
    .connect(MONGO_URL)
    .then(() => {
        app.listen(5000, () => {
            console.log("Server started on 5000");
        });
    })
    .catch(err => console.log(err));
