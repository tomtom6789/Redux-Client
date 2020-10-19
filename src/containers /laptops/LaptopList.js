import React, { Component } from 'react'
import Laptopcard from '../../components/laptops/LaptopCard';
export class LaptopList extends Component {
    render() {
        return (
            <div>
                <h3> Here is list of laptop</h3>
                <ul>
                    <Laptopcard />
                </ul>
            </div>
        )
    }
}

export default LaptopList


