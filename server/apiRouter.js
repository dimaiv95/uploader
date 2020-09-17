import express from "express";

import { getImages, getImage, postImage } from "./apiController";

const router = express.Router();

//GET:  /images
//GET:  /images/:imageID
//POST: /images

router.get("/images", getImages);

router.get("/images/:imageID", getImage);

router.post("/images", postImage);

export default router;