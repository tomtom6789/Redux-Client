import React from 'react'

export default function LaptopSearch(props){
    return(
        <div>
            <br></br>
            <br></br>
            <input name="search" type="text" value={props.search} placeholder="Search for a Laptop..." onChange={props.handleChange} />
            {/* <input name="serach" type="text" value={props.search} placeholder="  " onChange={} */}
        </div>
    )
}