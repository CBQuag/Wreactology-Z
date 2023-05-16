

const Header = (props) => {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '2px solid lightGray',
        marginBottom: '25px',
        paddingBottom: '10px'
    }
    const rightSide = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div style={style} className="App-logo">
            <h3>Wreactology Z</h3>
            <div style={rightSide}>
                <h4>Cart (0)</h4>
                <h4>Account</h4>
                <h4>Burgah</h4>
            </div>
        </div>
    )
}
export default Header