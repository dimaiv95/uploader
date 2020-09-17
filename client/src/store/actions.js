export const getAllImagesRequest = () => ({ type: "GET_ALL_IMAGES_REQUEST" });
export const getAllImagesSuccess = (data) => ({ type: "GET_ALL_IMAGES_SUCCESS", payload: data });
export const getAllImagesError = (error) => ({ type: "GET_ALL_IMAGES_ERROR", payload: error });

export const getImageByIdRequest = () => ({ type: "GET_IMAGE_BY_ID_REQUEST" });
export const getImageByIdSuccess = (data) => ({ type: "GET_IMAGE_BY_ID_SUCCESS", payload: data });
export const getImageByIdError = (error) => ({ type: "GET_IMAGE_BY_ID_ERROR", payload: error });

export const postImageRequest = () => ({ type: "POST_IMAGE_REQUEST" });
export const postImageProgress = (data) => ({ type: "POST_IMAGE_PROGRESS", payload: data });
export const postImageSuccess = (data) => ({ type: "POST_IMAGE_SUCCESS", payload: data });
export const postImageComplete = () => ({ type: "POST_IMAGE_COMPLETE" });
export const postImageError = (error) => ({ type: "POST_IMAGE_ERROR", payload: error });