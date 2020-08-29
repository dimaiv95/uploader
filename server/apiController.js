import Photos from "./apiModel";

export const getPhotos = async (req, res, next) => {
    try{
        const photos = await Photos.find();
        
        if(!photos){
            const error = new Error("Could not find photos.");
            error.statusCode = 422;
            next(error);
        }
        
        res.json(photos);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

export const getPhoto = async (req, res, next) => {
    const { photoID } = req.params;
    try{
        const photo = await Photos.findById(photoID);

        if(!photo){
            const error = new Error("Could not find photo.");
            error.statusCode = 422;
            return next(error);
        }

        res.json(photo);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

export const postPhoto = async (req, res, next) => {
    const { file } = req;
    
    if(!file){
        const error = new Error("No image provided.");
        error.statusCode = 422;
        return next(error);
    }
    
    const { filename } = file;
    const addPhoto = new Photos({
        name: filename,
        url: `/images/${filename}`
    });

    try{
        const photo = await addPhoto.save();

        res.status(201).json(photo._doc);
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }

};