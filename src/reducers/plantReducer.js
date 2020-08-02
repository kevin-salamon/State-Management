import { FETCH_PLANTS, NEW_PLANT, EDIT_PLANT, DELETE_PLANT } from '../actions/types';
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
                    (content, i) => content.id === action.payload.id ? {...content, employeeName : action.payload.employeeName ,  employeeDepartment : action.payload.employeeDepartment } : content)    
            };    
        case DELETE_PLANT:    
            return {    
                ...state,    
                plants: state.plants.filter(item => item.id !== action.payload)    
            };  
        default:
            return state; 
    }
}