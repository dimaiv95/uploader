import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    image: {
        thumbnail: {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        small: {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        medium: {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        large: {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    },
    metadata: {
        originalWidth: {
            type: Number,
            required: true
        },
        originalHeight: {
            type: Number,
            required: true
        },
        aspectRatio: {
            type: Number,
            required: true
        }
    },
    color: {
       type: String,
       required: true 
    }
}, { timestamps: true });

export default mongoose.model("Post", postSchema);