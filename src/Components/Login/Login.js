import React, { useState } from 'react'
import './Login.css'
import {auth} from '../../firebase'
import {Link, useHistory } from 'react-router-dom'

export default function Login(){

    const history = useHistory()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const sigIn = e =>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password)
        .then(resp => {
            
            history.push('/')
        }).catch(er => {
            alert(er.message)
        })
    }

    const register = e=>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password)
        .then(resp =>{
            
            history.push('/')
        }).catch(er => {
            alert(er.message)
        })
    }

    return(
        <div className="login">
                <Link to='/'>
                    <img className="login_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" />
                </Link>
                

                <div className="login_box">
                    <h1>Sign in</h1>
                        
                        <form>
                            <h5>E-mail</h5>
                            <input type="email" value={email ?? ''} onChange={e => setEmail(e.target.value) }  />

                            <h5>Password</h5>
                            <input type="password" value={password ?? ''} onChange={e => setPassword(e.target.value)} />

                            <button type="submit" onClick={sigIn}  className="login_button">Sign in</button>
                        </form>
                        <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                        </p>
                        <button onClick={register} className="login_register"> Create your amazon acount</button>

                </div>
        </div>
    )
}