const initialState = {
    photos: {
        loading: true,
        error: null,
        data: []
    },
    upload: {
        loading: false,
        error: null,
        data: []
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
                photos: {
                    loading: true,
                    error: null,
                    data: state.photos.data.length ? [...state.photos.data] : []
                },
                upload: {
                    loading: true,
                    error: null,
                    data: []
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
                    error: null,
                    data: action.payload
                }
            };
        case "POST_PHOTO_ERROR":
            return {
                ...state,
                upload: {
                    loading: false,
                    error: action.payload,
                    data: []
                }
            };
        default: return state;
        
    }
};

export default rootReducer;