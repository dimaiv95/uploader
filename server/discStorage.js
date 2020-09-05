import fs from "fs";
import fse from "fs-extra";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";

import { namesSize, sizes, createFolder } from "./utils";

const getDestination = (req, file, cb) => {
    cb(null, "/dev/null");
};

const getFilename = (req, file, cb) => {
    cb(null, file.originalname);
};

const mapImagesToImageProps = (images, prop) => {
    let imageProps = {};

    images.forEach((img, i) => {
        imageProps[namesSize[i]] = img[prop];
    });

    return imageProps;
};

const resizeImages = async (file, destination, foldername, filename, sizes) => {
    return Promise.all(sizes.map((s, i) => {
        return new Promise((resolve, reject) => {
            const filenameResize    = `${namesSize[i]}.${foldername}.${filename}`;
            const finalPath         = path.join(destination, foldername, filenameResize);
            const transformer       = sharp().resize(s);
            const outStream         = fs.createWriteStream(finalPath);

            file.stream.pipe(transformer).pipe(outStream);

            transformer.on("error", reject);
            outStream.on("error", reject);
            outStream.on("finish", () => resolve({
                destination: destination,
                foldername: foldername,
                filename: filenameResize,
                path: finalPath,
                size: outStream.bytesWritten
            }));
        });
    })); 
};

class DiscStorage {
    constructor(opts){
        this.getDestination = (opts.destination || getDestination);
        this.getFilename    = (opts.filename || getFilename);
    }

    _handleFile(req, file, cb){
        this.getDestination(req, file, (err, destination) => {
            if(err){
                return cb(err);
            }
            this.getFilename(req, file, async (err, filename) => {
                if (err){
                    return cb(err);
                }
                
                try{
                    const foldername = await createFolder(destination);
                    const images = await resizeImages(file, destination, foldername, filename, sizes);

                    const folderDestination = path.join(destination, foldername);
    
                    cb(null, {
                        folderDestination: folderDestination,
                        destination: mapImagesToImageProps(images, "destination"),
                        foldername: foldername,
                        filename: mapImagesToImageProps(images, "filename"),
                        path: mapImagesToImageProps(images, "path"),
                        size: mapImagesToImageProps(images, "size")
                    });
                }
                catch(err){
                    cb(err);
                }
            });
        });
    }
    _removeFile(req, file, cb){
        const path = file.folderDestination;
      
        delete file.folderDestination;
        delete file.destination;
        delete file.foldername;
        delete file.filename;
        delete file.path;
        delete file.size;
      
        fse.remove(path, cb);
      }
}

export default (opts) => new DiscStorage(opts);