export const requestAllPhotos = () => ({ type: "FETCH_PHOTOS_REQUEST" });
export const loadAllPhotos = (data) => ({ type: "FETCH_PHOTOS_SUCCESS", payload: data });
export const errorAllPhotos = (error) => ({ type: "FETCH_PHOTOS_ERROR", payload: error });
