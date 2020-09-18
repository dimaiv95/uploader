export const getAllPostsRequest = () => ({ type: "GET_ALL_POSTS_REQUEST" });
export const getAllPostsSuccess = (data) => ({ type: "GET_ALL_POSTS_SUCCESS", payload: data });
export const getAllPostsError = (error) => ({ type: "GET_ALL_POSTS_ERROR", payload: error });

export const getPostByIdRequest = () => ({ type: "GET_POST_BY_ID_REQUEST" });
export const getPostByIdSuccess = (data) => ({ type: "GET_POST_BY_ID_SUCCESS", payload: data });
export const getPostByIdError = (error) => ({ type: "GET_POST_BY_ID_ERROR", payload: error });

export const postPostRequest = () => ({ type: "POST_POST_REQUEST" });
export const postPostProgress = (data) => ({ type: "POST_POST_PROGRESS", payload: data });
export const postPostSuccess = (data) => ({ type: "POST_POST_SUCCESS", payload: data });
export const postPostComplete = () => ({ type: "POST_POST_COMPLETE" });
export const postPostError = (error) => ({ type: "POST_POST_ERROR", payload: error });