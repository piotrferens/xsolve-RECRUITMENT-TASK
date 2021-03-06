import { SET_FILTER, SET_SEARCH } from "../actions/actions";

const initialState = {
    selected: "",
    searchPhrase: "",
};
export const filter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                selected: action.payload,
                searchPhrase:
                    action.payload === "dateOfBirth" || state.selected === "dateOfBirth"
                        ? ""
                        : state.searchPhrase,
            };
        case SET_SEARCH:
            return {
                ...state,
                searchPhrase: action.payload,
            };
        default:
            return state;
    }
};
