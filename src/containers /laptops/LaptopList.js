import React, { Component } from 'react'
import Laptopcard from '../../components/laptops/LaptopCard';
import { connect } from 'react-redux'

export class LaptopList extends Component {
//     render() {

//         if(this.props.loading){
//             return <div>Loading...</div>
//         } else {
//             const laptops = this.props.laptops.map((laptop, i) => {
//                 return <Laptopcard key={i} laptop={laptop} />
//             })
//             return (
//                 <div>
//                     <h3> Here is list of laptop</h3>
//                     <ul>
//                         { laptops }
//                     </ul>
//                 </div>
//             )
//         }
      
//     }
// }

render() {
    const laptops = this.props.laptops.map((laptop, i) => <Laptopcard key={i} laptop={laptop} />)
    // if (this.props.loading) {
    //     return <div>Loading...</div>
    // }
    return (
        <div>
          <h3> Laptop  </h3> 
          <ul> 
              { laptops }
          </ul>
          
        </div>
    )
}
}


const mapStateToProps = state => {
    return {
        laptops: state.laptopsReducer.laptops
        // loading: state.laptopsReducer.loading
    }
}

export default connect(mapStateToProps) (LaptopList)


