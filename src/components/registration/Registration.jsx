import React, { useState } from 'react'
import './Registration.css'
import { useDispatch } from 'react-redux'

export const Registration = ({ setShowRegister }) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

     const dispatch =  useDispatch()
    const addUser = () => {
        dispatch({
            type: 'REGISTRATION',
            payload:{
                name, password, rePassword
            }
        })
        alert('done')
    }
        const closeRegister = () => {
            setShowRegister(false)
        }
  return (
    <div className='registration'>
            <div className="model-register">
                    <div className="heading">
                            <h1>Employee Register</h1>
                            <button className='close-model' onClick={ closeRegister }>X</button>
                    </div>
                    <input type="text" placeholder='Enter your name' value={ name } onChange={e => setName(e.target.value)}/><br/>
                    <input type="password" placeholder='Enter password' value={ password } onChange={e => setPassword(e.target.value)}/><br/>
                    <input type="password" placeholder='Re-Enter your password' value={ rePassword } onChange={e => setRePassword(e.target.value)}/><br/>
                    <button onClick={ addUser }>ADD EMPLOYEER</button>
            </div>
    </div>
  )
}
