import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLaptop } from '../../actions/laptop';



export class LaptopForm extends Component {


    state = {
        name: "",
        condition: "",
        price: ""
    }

   handleSubmit(e)  {
        e.preventDefault();

        const laptop = {
            laptop: this.state
        }

        this.props.createLaptop(laptop, this.props.history)
 

    }


   handleChange = e => {
     this.setState ({
         [e.target.name]: e.target.value 
     })
   }

    render() {
        return (
            <div>
                <h3> Create a Laptop </h3>
                <form onSubmit={this.handleSubmit.bind(this)} className="form">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required></input>
                    </div>
                    <div>
                        <label htmlFor="condition">Condition: </label>
                        <input type="text" name="condition" id="condition" value={this.state.condition} onChange={this.handleChange} required></input>
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="number" name="price" id="price" value={this.state.price} onChange={this.handleChange}required></input>
                    </div>
                    <input type="submit" value="Create Laptop" />
                </form>
            </div>
        )
    }
}

export default connect(null, {createLaptop})(LaptopForm);

