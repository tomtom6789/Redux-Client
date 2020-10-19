const BASE_URL = 'http://localhost:3001/'
const LOADING = {type: "LOADING"}




export const fetchLaptops = () => {

    return(dispatch) => {
        dispatch(LOADING);

        fetch(BASE_URL + '/laptops')
        .then(resp => resp.json())
        .then(laptops => dispatch({ type: "LOAD_LAPTOPS", laptops }))
    }
}

