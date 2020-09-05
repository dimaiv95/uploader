import mongoose from "mongoose";

const Schema = mongoose.Schema;

const photoSchema = new Schema({
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
}, { timestamps: true });

export default mongoose.model("Photo", photoSchema);