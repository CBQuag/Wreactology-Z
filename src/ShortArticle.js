

const ShortArticle = (props) => {
    
    return (
        <div className="App-logo">
            <h4 style={{color:'gray' }}>{props.type}</h4>
            <h3>{props.title}</h3>
            {props.last ? null: <hr/>}
        </div>       
    )
}
export default ShortArticle