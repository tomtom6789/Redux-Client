import React, { Component } from 'react'
import Laptopcard from '../../components/laptops/LaptopCard';
import { connect } from 'react-redux'

export class LaptopList extends Component {
    render() {

        if(this.props.loading){
            return <div>Loading...</div>
        } else {
            // console.log(this.props.laptops)
            const laptops = this.props.laptops.map((laptop, i) => {
                return <Laptopcard key={i} laptop={laptop} />
            })
            return (
                <div>
                    <h3> Here is list of laptop</h3>
                    <ul>
                        { laptops }
                    </ul>
                </div>
            )
        }
      
    }
}

const mapStateToProps = state => {
    return {
        laptops: state.laptopsReducer.laptops,
        loading: state.laptopsReducer.loading
    }
}

export default connect(mapStateToProps) (LaptopList)


