import { languagesAPI } from "../../Api/Api";

const SET_LANGUAGES = "SET-LANGUAGES";

let initialState = {
    languages: [
        {
            _id: null,
            name: null,
            native: null,
        }
    ]
};

const languagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGES:
            return {...state, languages: [...state.languages, ...action.languages]}
        default:
            return state;
    }
}

export const setLanguages = (languages) => ({type: SET_LANGUAGES, languages});

export const setAllLanguages = () => {
    return async (dispatch) => {
        let response = await languagesAPI.getLanguages();
        
        if(response.status === 200) {
            dispatch(setLanguages(response.data.languages));
        } 
    }
}

export default languagesReducer;