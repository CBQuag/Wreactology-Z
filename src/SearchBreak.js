import './App.css'
import { useState } from 'react';

const SearchBreak = (props) => {
    
    let style={
        paddingBottom:'40px',
        marginBottom:'30px',
        borderBottom:'1px solid lightGray',
    }
    // const [inp, changeInput] = useState('nah');
    return (
        <div style={style}>
            <h2 className="App-logo">Wreactology Z</h2>
            <p>{props.description}</p>
            <input type="text" placeholder="Search articles"></input>
            <button onClick={()=>console.log('yeah')}>submit</button>
        </div>    
    )
}
export default SearchBreak