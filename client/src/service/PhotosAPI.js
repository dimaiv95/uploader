import axios from "axios";

class PhotosAPI{
    getAllPhotos = async () => {
        return await axios({
            method: "get",
            url: "/api/photos/"
        });
    }

    getPhotoById = async (id) => {
        return await axios({
            method: "get",
            url: `/api/photos/${id}`
        });
    }

    postPhoto = async (data, cb) => {
        return await axios({
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
            url: "/api/photos/",
            data,
            onUploadProgress(progressEvent) {
                const { loaded, total } = progressEvent;
                let precent = Math.ceil(loaded * 100) / total;

                precent = precent >= 100 ? 100 : precent;

                cb(precent);
            }
        });
    }
}

export default PhotosAPI;