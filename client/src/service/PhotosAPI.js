import axios from "axios";

class PhotosAPI{
    getAllPhotos = async () => {
        return await axios({
            method: "get",
            url: "/api/photos/"
        });
    }
}

export default PhotosAPI;