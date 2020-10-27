import React from 'react'

export default function ToySearch(props){
    return(
        <div>
            <input name="search" type="text" value={props.search} placeholder="Search for a Laptop..." onChange={props.handleChange} />
            {/* <input name="serach" type="text" value={props.search} placeholder="  " onChange={} */}
        </div>
    )
}