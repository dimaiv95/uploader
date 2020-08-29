import express from "express";

import { getPhotos, getPhoto, postPhoto } from "./apiController";

const router = express.Router();

//GET:  /photos
//GET:  /photos/:photoID
//POST: /photos

router.get("/photos", getPhotos);

router.get("/photos/:photoID", getPhoto);

router.post("/photos", postPhoto);

export default router;