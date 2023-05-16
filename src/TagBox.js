import './App.css'

const TagBox=(props)=>{
    let tags=props.types.split(' ')
    let style={
        backgroundColor:'lightGray',
    }  
    return(
        <div style={{display:'flex'}}>
            {tags ? tags.map(type => (<div key={type}  style={style} className='type-box'>{type}</div>)):null}
        </div>
    )
}
export default TagBox