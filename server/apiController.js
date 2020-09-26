import Post from "./apiModel";
import { namesSize } from "./utils";

export const getPosts = async (req, res, next) => {
    try{
        const posts = await Post.find();
        
        if(!posts){
            const error = new Error("Could not find posts.");
            error.statusCode = 422;
            next(error);
        }
        
        res.json(posts);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

export const getPost = async (req, res, next) => {
    const { postID } = req.params;
    try{
        const post = await Post.findById(postID);

        if(!post){
            const error = new Error("Could not find post.");
            error.statusCode = 422;
            return next(error);
        }

        res.json(post);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

export const postPost = async (req, res, next) => {
    const { file, body } = req;

    if(!file){
        const error = new Error("No image provided.");
        error.statusCode = 422;
        return next(error);
    }

    const { foldername, filename } = file;
    const { color, originalWidth, originalHeight, aspectRatio } = body;

    const image = {};
    
    if(!foldername || !filename){
        const error = new Error("Error with loading image.");
        error.statusCode = 500;
        return next(error);
    }

    namesSize.forEach(s => {
        image[s] = {
            name: filename[s],
            url: `/images/${foldername}/${filename[s]}`
        };
    });

    const data = {
        image,
        color,
        metadata: {
            originalWidth,
            originalHeight,
            aspectRatio
        }
    };

    const newPost = new Post(data);

    try{
        const post = await newPost.save();

        res.status(201).json(post._doc);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }

};