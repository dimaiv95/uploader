const initialState = {
    posts: {
        loading: true,
        error: null,
        data: []
    },
    post: {
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
        case "GET_ALL_POSTS_REQUEST":
            return {
                ...state,
                posts: {
                    loading: true,
                    error: null,
                    data: state.posts.data.length ? [...state.posts.data] : []
                } 
            };
        case "GET_ALL_POSTS_SUCCESS":
            return {
                ...state,
                posts: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            };
        case "GET_ALL_POSTS_ERROR":
            return {
                ...state,
                posts: {
                    loading: false,
                    error: action.payload,
                    data: []
                }
            };
        case "GET_POST_BY_ID_REQUEST":
            return {
                ...state,
                post: {
                    loading: true,
                    error: null,
                    data: {}
                } 
            };
        case "GET_POST_BY_ID_SUCCESS":
            return {
                ...state,
                post: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            };
        case "GET_POST_BY_ID_ERROR":
            return {
                ...state,
                post: {
                    loading: false,
                    error: action.payload,
                    data: {}
                }
            };
        case "POST_POST_REQUEST":
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
        case "POST_POST_PROGRESS":
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
        case "POST_POST_SUCCESS":
            return {
                ...state,
                posts: {
                    loading: false,
                    error: null,
                    data: [...state.posts.data, action.payload]
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
        case "POST_POST_COMPLETE":
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
        case "POST_POST_ERROR":
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