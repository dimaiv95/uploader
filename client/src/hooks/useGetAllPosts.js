import { useContext, useCallback } from "react";
import { PostsAPIContext } from "../contexts";

import { getAllPostsRequest, getAllPostsSuccess, getAllPostsError } from "../store/actions";

import useRequest from "./useRequest";

const useGetAllPosts = () => {
    const { getAllPosts } = useContext(PostsAPIContext);

    const request = useCallback(() => getAllPosts(), []);

    return useRequest(request, "posts", getAllPostsRequest, getAllPostsSuccess, getAllPostsError);
};

export default useGetAllPosts;