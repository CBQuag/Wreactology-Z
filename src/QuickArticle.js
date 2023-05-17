
const QuickArticle = (props) => {
    
    let quick = {
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid lightGray',
        padding:'30px 0px 30px 0px'
    }
    let imag = {
        width: '130px',
        marginRight: '20px',
        borderRadius:'8px'
        
    }

    return (
        <div style={quick}>
            <img style={imag} src={props.image} alt="" />
            <h4>{props.description}</h4>
        </div>
    )
}
export default QuickArticle