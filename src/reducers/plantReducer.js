import { FETCH_PLANTS, NEW_PLANT, EDIT_PLANT, DELETE_PLANT, LOAD_PLANTS } from '../actions/types';
import initialStateJSON from '../initialState.json';

const initialState = {
    plants: initialStateJSON,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PLANTS:
            console.log("reducer");
            return {
                ...state
            };
        case NEW_PLANT:    
            return {    
                ...state,    
                plants: state.plants.concat(action.payload)    
            };   
        case EDIT_PLANT:    
            return {    
                ...state,    
                plants: state.plants.map(    
                    (content, i) => content.id === action.payload.id ? {...content,
                        id: action.payload.id, 
                        name: action.payload.name, 
                        plantDate : action.payload.plantDate, 
                        growTime: action.payload.growTime, 
                        idealWater: action.payload.idealWater, 
                        idealSun: action.payload.idealSun, 
                        picture: action.payload.picture } : content)    
            };    
        case DELETE_PLANT:    
            return {    
                ...state,    
                plants: state.plants.filter(item => item.id !== action.payload)    
            };
        case LOAD_PLANTS:
            return {
                ...state,
                plants: action.payload
            }
        default:
            return state; 
    }
}