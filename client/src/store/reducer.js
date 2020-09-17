const initialState = {
    images: {
        loading: true,
        error: null,
        data: []
    },
    image: {
        loading: true,
        error: null,
        data: {}
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
        case "GET_ALL_IMAGES_REQUEST":
            return {
                ...state,
                images: {
                    loading: true,
                    error: null,
                    data: state.images.data.length ? [...state.images.data] : []
                } 
            };
        case "GET_ALL_IMAGES_SUCCESS":
            return {
                ...state,
                images: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            };
        case "GET_ALL_IMAGES_ERROR":
            return {
                ...state,
                images: {
                    loading: false,
                    error: action.payload,
                    data: []
                }
            };
        case "GET_IMAGE_BY_ID_REQUEST":
            return {
                ...state,
                image: {
                    loading: true,
                    error: null,
                    data: {}
                } 
            };
        case "GET_IMAGE_BY_ID_SUCCESS":
            return {
                ...state,
                image: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            };
        case "GET_IMAGE_BY_ID_ERROR":
            return {
                ...state,
                image: {
                    loading: false,
                    error: action.payload,
                    data: {}
                }
            };
        case "POST_IMAGE_REQUEST":
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
        case "POST_IMAGE_PROGRESS":
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
        case "POST_IMAGE_SUCCESS":
            return {
                ...state,
                images: {
                    loading: false,
                    error: null,
                    data: [...state.images.data, action.payload]
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
        case "POST_IMAGE_COMPLETE":
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
        case "POST_IMAGE_ERROR":
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