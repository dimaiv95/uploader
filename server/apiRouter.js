import express from "express";

import { getPosts, getPost, postPost } from "./apiController";

const router = express.Router();

//GET:  /posts
//GET:  /posts/:postID
//POST: /posts

router.get("/posts", getPosts);

router.get("/posts/:postID", getPost);

router.post("/posts", postPost);

export default router;