

const AuthorBox = (props) => {
    
    let authorBox = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '0px',
        paddingRight:'30px'
    }
    let profilePic = {
        borderRadius: '50%',
        width: '30px',
        height:'30px'
    }
    return (
        <div style={authorBox} className="App-logo">
            <div style={authorBox}>
                {props.profilePic?<img style={profilePic} src={props.profilePic} alt="" />:null}
                <h4 className="App-logo">{props.author}</h4>
            </div>
            <div style={authorBox}>
                <div>🕑</div>
                <h4 className="App-logo">{props.date}</h4>
            </div>
        </div>
    )
}
export default AuthorBox