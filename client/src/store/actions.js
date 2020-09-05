export const getRequest = () => ({ type: "GET_REQUEST" });
export const getAllPhotosSuccess = (data) => ({ type: "GET_ALL_PHOTOS_SUCCESS", payload: data });
export const getAllPhotosError = (error) => ({ type: "GET_ALL_PHOTOS_ERROR", payload: error });
