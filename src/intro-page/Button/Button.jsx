import './Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({buttonText, type}) => {
    return(
        <button type={type}>{buttonText}</button>
    )
}

export default Button