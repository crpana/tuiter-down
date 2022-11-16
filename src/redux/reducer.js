import { GET_DATA_NAME } from "./action";

const initialState = {
    videos_url: [],
   
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DATA_NAME:
            return {
                ...state,
                videos_url: action.payload,
            };


        default:
            return state;
    }

};

export default rootReducer;