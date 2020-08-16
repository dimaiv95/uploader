import express from "express";

import { getPhotos, getPhoto, postPhoto } from "./apiController";

const router = express.Router();

//GET:  /photos
//GET:  /photo/:photoID
//POST: /photo

router.get("/photos", getPhotos);

router.get("/photo/:photoID", getPhoto);

router.post("/photo", postPhoto);

export default router;