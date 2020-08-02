import { FETCH_PLANTS, NEW_PLANT } from './types';

export const fetchPlants = () => dispatch => {
    console.log("fetching...");
    fetch(null)
        .then(res => res.json())
        .then(plants => 
            dispatch({
                type: FETCH_PLANTS,
                payload: plants 
            })
        );
}

export const createPlant = (plantData) => dispatch => {
    console.log("adding...");
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(plantData)
    })
    .then(res => res.json())
    .then(plant => dispatch({
        type: NEW_PLANT,
        payload: plant
    }));
};