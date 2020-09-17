import axios from "axios";

class ImagesAPIService{
    getAllImages = async () => {
        return await axios({
            method: "get",
            url: "/api/images/"
        });
    }

    getImageById = async (id) => {
        return await axios({
            method: "get",
            url: `/api/images/${id}`
        });
    }

    postImage = async (data, cb) => {
        return await axios({
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
            url: "/api/images/",
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

export default ImagesAPIService;