import mongoose from "mongoose";

const Schema = mongoose.Schema;

const photosSchema = Schema({
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

// const photosSchema = Schema({
//     name: {
//         thumbnail: {
//             type: String,
//             required: true
//         },
//         small: {
//             type: String,
//             required: true
//         },
//         medium: {
//             type: String,
//             required: true
//         },
//         large: {
//             type: String,
//             required: true
//         }
//     },
//     url: {
//         thumbnail: {
//             type: String,
//             required: true
//         },
//         small: {
//             type: String,
//             required: true
//         },
//         medium: {
//             type: String,
//             required: true
//         },
//         large: {
//             type: String,
//             required: true
//         }
//     }
// }, { timestamps: true });

export default mongoose.model("Photos", photosSchema);