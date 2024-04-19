import './Input.css'

// eslint-disable-next-line react/prop-types
const Input = ({type, placeholder, name, id}) => {
    return(
        <input id={id} type={type} name={name} placeholder={placeholder}/>
    )
}

export default Input