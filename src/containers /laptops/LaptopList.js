import React, { Component } from 'react'
import Laptopcard from '../../components/laptops/LaptopCard';
import { connect } from 'react-redux'
import Search from '../../laptops/Search'
// import Sort from '../../laptops/Sort'
import { deleteLaptop } from '../../actions/laptop';
export class LaptopList extends Component {


    state = {
        search: "",
       
        
    }
    
    renderLaptopCards() {
        if (this.props.loading) {
            return <h2>LOADING Laptops....</h2>;
          }
         
        let displayedLaptops
        if (this.state.search) {
            displayedLaptops = this.props.laptops.filter((laptop) =>
            laptop.name.toLowerCase().includes(this.state.search.toLowerCase())
            );
        } else {
            displayedLaptops = this.props.laptops;
        }
        return displayedLaptops.map((laptop, i) => {
            return <Laptopcard key ={i} laptop={laptop} id={laptop.id} deleteLaptop={this.handleDelete}/>;
        });
    }

    handleDelete = (event) =>{
        this.props.deleteLaptop(event.target.id)
     }


    handleSearchChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
          [name]: value,
        });
      };

    
  



    render() {
            return (
                <div>
                    <Search
                    search={this.state.search}
                    handleChange = {this.handleSearchChange}
                     />
                    <h3 style={{color: "blue"}}> Here is list of laptop</h3>
                    <div>
                        {this.renderLaptopCards()}
                    </div>
                   
                    
                </div>
            )
        }
    }

const mapStateToProps = state => {
    return {
        laptops: state.laptopsReducer.laptops,
        loading: state.laptopsReducer.loading
    }
}




export default connect(mapStateToProps, {deleteLaptop}) (LaptopList)


