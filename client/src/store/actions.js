export const getAllPhotosRequest = () => ({ type: "GET_ALL_PHOTOS_REQUEST" });
export const getAllPhotosSuccess = (data) => ({ type: "GET_ALL_PHOTOS_SUCCESS", payload: data });
export const getAllPhotosError = (error) => ({ type: "GET_ALL_PHOTOS_ERROR", payload: error });

export const getPhotoByIdRequest = () => ({ type: "GET_PHOTO_BY_ID_REQUEST" });
export const getPhotoByIdSuccess = (data) => ({ type: "GET_PHOTO_BY_ID_SUCCESS", payload: data });
export const getPhotoByIdError = (error) => ({ type: "GET_PHOTO_BY_ID_ERROR", payload: error });

export const postPhotoRequest = () => ({ type: "POST_PHOTO_REQUEST" });
export const postPhotoProgress = (data) => ({ type: "POST_PHOTO_PROGRESS", payload: data });
export const postPhotoSuccess = (data) => ({ type: "POST_PHOTO_SUCCESS", payload: data });
export const postPhotoComplete = () => ({ type: "POST_PHOTO_COMPLETE" });
export const postPhotoError = (error) => ({ type: "POST_PHOTO_ERROR", payload: error });