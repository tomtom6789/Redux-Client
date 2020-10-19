import React, { Component } from 'react'
import { connect } from 'react-redux'
// import laptopsReducer from '../../reducers/laptopsReducer'


export class LaptopShow extends Component {

    state = {
        laptop: {}, 
        loading: true 
    }

    componentDidMount () {
        const laptop = this.props.laptops.find(laptop => laptop.id === parseInt(this.props.match.params.id, 10))
        if(laptop)
        this.setState ({
            laptop, 
            loading: false
        })
    }



    render() {
        if(this.props.loading){
            return <div>Loading...</div>
        } 
        return (
            <div>
                <p> Name: {this.state.laptop.name} </p>
                <p> Condition: {this.state.laptop.condition} </p>
                <p> Price: ${this.state.laptop.price}</p>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        laptops: state.laptopsReducer.laptops,
        loading: state.laptopsReducer.loading
    }
}


export default connect(mapStatetoProps, null)(LaptopShow)

