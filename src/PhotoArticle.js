import AuthorBox from "./AuthorBox"


const PhotoArticle = (props) => {

    
    let blackBox = {
        backgroundColor: 'black',
        minHeight: '300px',
        borderRadius: '20px',   
    }
    let articleImage = {
        width: '100%',
        borderRadius: '20px', 
    }

    return (
        <div className="App-logo">
            {props.image ? <img style={articleImage} src={props.image} alt="Article" />:<div style={blackBox}></div>}
            <h3>{props.type}</h3>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <AuthorBox author={props.author} date={props.date} />
        </div>
    )
}
export default PhotoArticle