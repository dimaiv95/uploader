import fs from "fs";
import path from "path";

export const namesSize = ["thumbnail", "small", "medium", "large"];

export const sizes = [150, 500, 1000, 2000];

export const createFolder = (destination) => {
    return new Promise((resolve, reject) => {
        const foldername = Date.now().toString();
        fs.mkdir(path.join(destination, foldername), (err) => {
            if(err){
                return reject(err);
            }
    
            return resolve(foldername);
        });
    });
};