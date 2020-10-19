const initialState = { 
    loading: true, 
    laptops: []

}

export default (state = initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {...state, loading:true }
        case "LOAD_LAPTOPS":
            return {...state, loading:false , laptops: action.laptops}
        default: 
            return state;
    }
}