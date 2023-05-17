import './App.css'
import { useState } from 'react';

const SearchBreak = (props) => {
    
    let style={
        padding:'30px 0px 40px 0px',
        margin: '40px 0px 40px 0px',
        borderBottom: '1px solid lightGray',
        borderTop:'1px solid lightGray',
    }
    let search = {
        width: '100%',
        height: '50px',
        border: '1px solid lightGray'
    }
    return (
        <div style={style}>
            <h2 className="App-logo">Wreactology Z</h2>
            <p>{props.description}</p>
            <input style={search} type="text" placeholder="Search articles"></input>
        </div>    
    )
}
export default SearchBreak