export const getAllPhotosRequest = () => ({ type: "GET_ALL_PHOTOS_REQUEST" });
export const getAllPhotosSuccess = (data) => ({ type: "GET_ALL_PHOTOS_SUCCESS", payload: data });
export const getAllPhotosError = (error) => ({ type: "GET_ALL_PHOTOS_ERROR", payload: error });

export const postPhotoRequest = (data) => ({ type: "POST_PHOTO_REQUEST", payload: data });
export const postPhotoSuccess = (data) => ({ type: "POST_PHOTO_SUCCESS", payload: data });
export const postPhotoError = (error) => ({ type: "POST_PHOTO_ERROR", payload: error });