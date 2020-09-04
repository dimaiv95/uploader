const initialState = {
    loading: true,
    error: null,
    photos: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_PHOTOS_REQUEST":
            return {
                loading: true,
                error: null,
                photos: []
            };
        case "FETCH_PHOTOS_SUCCESS":
            return {
                loading: false,
                error: null,
                photos: action.payload
            };
        case "FETCH_PHOTOS_ERROR":
            return {
                loading: false,
                error: action.payload,
                photos: []
            };
        default: return state;
        
    }
};

export default rootReducer;