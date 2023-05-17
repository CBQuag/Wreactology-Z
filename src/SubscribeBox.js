

const SubscribeBox = (props) => {
    
    let style = {
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 0px 0px 0px',
        textAlign:'center'
        
    }
    let innerBox = {
        width:'90%'
    }
    return (
        <div style={style}>
            <div style={innerBox}>
                <h2>Subscribe to unlock premium content</h2>
                <p>Sed at tellus, pharetra lacus, aenean risus non nisl ultricies commodo diam aliquet arcu enim eu leo porttitor habitasse adipiscing porttitor varius ultricies facilisis viverra lacus neque.</p>
            </div>
        </div>
    )
}
export default SubscribeBox