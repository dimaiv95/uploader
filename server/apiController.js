import Image from "./apiModel";
import { namesSize } from "./utils";

export const getImages = async (req, res, next) => {
    try{
        const images = await Image.find();
        
        if(!images){
            const error = new Error("Could not find images.");
            error.statusCode = 422;
            next(error);
        }
        
        res.json(images);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

export const getImage = async (req, res, next) => {
    const { imageID } = req.params;
    try{
        const image = await Image.findById(imageID);

        if(!image){
            const error = new Error("Could not find image.");
            error.statusCode = 422;
            return next(error);
        }

        res.json(image);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

export const postImage = async (req, res, next) => {
    const { file, body } = req;

    if(!file){
        const error = new Error("No image provided.");
        error.statusCode = 422;
        return next(error);
    }

    const { foldername, filename } = file;
    const { color } = body;
    const imageSizes = {};
    
    if(!foldername || !filename){
        const error = new Error("Error with loading image.");
        error.statusCode = 500;
        return next(error);
    }

    namesSize.forEach(s => {
        imageSizes[s] = {
            name: filename[s],
            url: `/images/${foldername}/${filename[s]}`
        };
    });

    const data = {
        image: imageSizes,
        color
    };

    const newImage = new Image(data);

    try{
        const image = await newImage.save();

        res.status(201).json(image._doc);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }

};