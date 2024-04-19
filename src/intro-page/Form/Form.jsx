import Input from "../Input/Input"
import Button from "../Button/Button"
import './Form.css'
const Form = () => {

    return(
        <section className="sectionForm">
        <p className="offer">try it free 7 days <strong>then $20/mo. thereoffer</strong></p>
        <form>
            <Input 
                type='text'
                placeholder='First Name'
                name='firstName'
                id='inputName'
            />
            <Input 
                type='text'
                placeholder='Last Name'
                name='lastName'
                id='inputLast'
            />
            <Input 
                type='email'
                placeholder='Email Address'
                name='email'
                id='inputEmail'
            />
            <Input 
                type='password'
                placeholder='Password'
                name='password'
                id='inputPassword'
            />
            <Button type='button' buttonText='CLAIM YOUR FREE TRIAL'/>
            <p className="textFooter">By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
        </form>
        </section>
        
        
    )
}

export default Form