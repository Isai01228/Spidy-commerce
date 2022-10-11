import React, {useState} from "react";
import './styles.css'

const LoginPage = () => {
    const [emailInput, setEmail] = useState('')
    const [passwordInput, setPassword ] = useState('')

    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        const values = {
            email: emailInput,
            password: passwordInput
        }
        if (emailInput === '' || passwordInput === '') {
            console.log('Por favor no dejar espacios vacios');
        }else{
            console.log(values)
        }
        setEmail('')
        setPassword('')
    }

    return(
        <>
        <div id="loginContainer" >
        <form id="form" onSubmit={handleForm}>
            <h1 className="centerLetters">Sign In</h1>
            <h5 className="centerLetters">With great power comes great responsibility</h5>
        <input id="email_input" placeholder="User Email" type="text" value={emailInput} onChange={handleEmail} />
        <input id="password_input" placeholder="Password" type="password" value={passwordInput} onChange={handlePassword} />
        <h5 className="centerLetters">Forgot your password ?</h5>
        <button className="ColorWhite" id="SignIn_button" onClick={handleForm} >SIGN IN</button>
        </form>
        <div id="SignUpContainer">
            <h1 className="ColorWhite">Sign Up</h1>
            <h5 className="ColorWhite" >Sign up here if you don't have account</h5>
            <button className="ColorWhite" id="SignUp_button" >SIGN UP</button>
        </div>
        </div>
        </>
    )
}

export default LoginPage