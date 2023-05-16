

const AuthorBox = (props) => {
    
    let authorBox = {
        display: 'flex',
        alignItems: 'center'
    }
    let profilePic = {
        borderRadius: '50%',
        width: '30px',
        height:'30px'
    }
    return (
        <div style={authorBox} className="App-logo">
            {props.profilePic?<img style={profilePic} src={props.profilePic} alt="" />:null}
            <h4 className="App-logo">{props.author}</h4>
            <h4 className="App-logo">{props.date}</h4>
        </div>
    )
}
export default AuthorBox