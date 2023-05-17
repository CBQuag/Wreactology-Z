

const TaggedArticle = (props) => {
    
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
        <div style={articleBox}>
            <div>
                <h3>{props.type}</h3>
                <h2>{props.description}</h2>
            </div>
        </div>
    )
}
export default TaggedArticle