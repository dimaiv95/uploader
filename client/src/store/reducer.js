const initialState = {
    photos: {
        loading: true,
        error: null,
        data: []
    },
    upload: {
        loading: false,
        progress: 0,
        success: false,
        complete: true,
        error: null,
        data: null
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_ALL_PHOTOS_REQUEST":
            return {
                ...state,
                photos: {
                    loading: true,
                    error: null,
                    data: state.photos.data.length ? [...state.photos.data] : []
                } 
            };
        case "GET_ALL_PHOTOS_SUCCESS":
            return {
                ...state,
                photos: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            };
        case "GET_ALL_PHOTOS_ERROR":
            return {
                ...state,
                photos: {
                    loading: false,
                    error: action.payload,
                    data: []
                }
            };
        case "POST_PHOTO_REQUEST":
            return {
                ...state,
                upload: {
                    loading: true,
                    progress: 0,
                    success: false,
                    complete: false,
                    error: null,
                    data: null
                }
            };
        case "POST_PHOTO_PROGRESS":
            return {
                ...state,
                upload: {
                    loading: true,
                    progress: action.payload,
                    success: false,
                    complete: false,
                    error: null,
                    data: null
                }
            };
        case "POST_PHOTO_SUCCESS":
            return {
                photos: {
                    loading: false,
                    error: null,
                    data: [...state.photos.data, action.payload]
                },
                upload: {
                    loading: false,
                    progress: state.upload.progress,
                    success: true,
                    complete: false,
                    error: null,
                    data: action.payload
                }
            };
        case "POST_PHOTO_COMPLETE":
            return {
                ...state,
                upload: {
                    loading: false,
                    progress: state.upload.progress,
                    success: false,
                    complete: true,
                    error: null,
                    data: { ...state.upload.data }
                }
            };
        case "POST_PHOTO_ERROR":
            return {
                ...state,
                upload: {
                    loading: false,
                    progress: state.upload.progress,
                    success: false,
                    complete: false,
                    error: action.payload,
                    data: []
                }
            };
        default: return state;
        
    }
};

export default rootReducer;