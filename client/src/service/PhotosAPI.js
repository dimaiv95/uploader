import axios from "axios";

class PhotosAPI{
    getAllPhotos = async () => {
        return await axios({
            method: "get",
            url: "/api/photos/"
        });
    }

    postPhoto = async (photo) => {
        return await axios({
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
            url: "/api/photos/",
            data: photo
        });
    }
}

export default PhotosAPI;