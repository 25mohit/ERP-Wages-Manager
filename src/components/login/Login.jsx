import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'

export const Login = ({setShowLogin}) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const loginUser = () => {
         const payload =  users.find( user => user.name === name && user.password === password)
         if(payload){
             dispatch({
                 type: 'LOGIN_USER',
                 payload
             })
             alert('SUccess')
         }
    }
    const closeLogin = () => {
      setShowLogin(false)
    }
  return (
    <div className="login">
      <div className="model-login">
            <div className="heading">
                  <h1>Employee Login</h1>
                  <button className='close-model' onClick={ closeLogin }>X</button>
            </div>
          <input type="text" value={ name } placeholder='Enter your name' onChange={ e => setName(e.target.value)}/><br/>
          <input type="password" value={ password } placeholder='Enter your password' onChange={ e => setPassword(e.target.value)} /><br/>
          <button onClick={ loginUser }>LOGIN</button>
      </div>
    </div>
  )
}
