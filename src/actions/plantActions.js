import { FETCH_PLANTS, NEW_PLANT, EDIT_PLANT, DELETE_PLANT } from './types';

export function fetchPlants() {  
    return dispatch => {  
        return dispatch({  
            type: FETCH_PLANTS  
        });  
    }  
}; 

export function createPlant(data) {  
    return dispatch => {  
        return dispatch({  
            type: NEW_PLANT,  
            payload: data  
        });  
    }  
};

export function editPlant(data) {  
    return dispatch => {  
        return dispatch({  
            type: EDIT_PLANT,  
            payload: data  
        });  
    }  
};  
  
export function deletePlant(id) {  
    return dispatch => {  
        return dispatch({  
            type: DELETE_PLANT,  
            payload: id
        });  
    }  
}; 