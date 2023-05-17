import AuthorBox from "./AuthorBox"
import './App.css'

const MainArticle = (props) => {
    
    let articleBox = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'end',
        backgroundColor: 'black',
        color:'white',
        minHeight:'400px',
        borderRadius: '12px',
        backgroundImage: `url("${props.bg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding:'0px 20px 20px 20px'
    }
    return (
        <div style={articleBox} className="App-logo">
            <div>
                <div>
                    <div style={{display:'flex',width:'40px'}} className='type-box'>{props.type}</div>
                </div>
                <h2 style={{marginBottom:'0px'}}>{props.title}</h2>
                <AuthorBox profilePic={props.profilePic} author={props.author} date={props.date}/>
            </div>
        </div>
    )
}
export default MainArticle