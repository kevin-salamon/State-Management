import { FETCH_PLANTS, NEW_PLANT } from '../actions/types';
import initialStateJSON from '../initialState.json';

const initialState = {
    plants: initialStateJSON,
    plant: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PLANTS:
            console.log("reducer");
            return {
                ...state,
                plants: action.payload
            }
        case NEW_PLANT:
            console.log("reducer");
            return {
                ...state,
                plant: action.payload
            }
        default:
            return state; 
    }
}