const LOADING = {type: "LOADING"}




export const fetchLaptops = () => {

    return(dispatch) => {
        dispatch(LOADING);

        fetch('http://localhost:3001/laptops')
        .then(resp => resp.json())
        .then(laptops => dispatch({ type: "LOAD_LAPTOPS", laptops }))
    }
}
 


export const createLaptop = (laptopData, history) => {

    return dispatch => {
        dispatch(LOADING);

        fetch('http://localhost:3001/laptops', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(laptopData)
        })
        .then(resp => resp.json())
        .then( laptop => {
            // console.log(laptop)
            dispatch({ type: "ADD_LAPTOP", laptop })
            history.push('/laptops')
        })
    }
}


export const deleteLaptop = (id) => {


    return dispatch => {
        dispatch(LOADING);

        dispatch({type: 'DELETING_LAPTOP'})
        fetch(`http://localhost:3001/laptops/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(() => dispatch({type: 'LAPTOP_DELETED', payload: id}))
        
    }
}

