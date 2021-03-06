import axios from "axios";

class PostsAPIService{
    getAllPosts = async () => {
        return await axios({
            method: "get",
            url: "/api/posts/"
        });
    }

    getPostById = async (id) => {
        return await axios({
            method: "get",
            url: `/api/posts/${id}`
        });
    }

    postPost = async (data, cb) => {
        return await axios({
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
            url: "/api/posts/",
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

export default PostsAPIService;