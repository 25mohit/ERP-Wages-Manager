import React, { useState } from 'react'
import './Form.css'
import { Login } from '../login/Login'
import { Registration } from '../registration/Registration'
import help from '../../components/images/help.png'
import { AboutMe } from '../aboutMe/AboutMe'

export const Form = () => {
    const [showRegister, setShowRegister] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [aboutMe, setAboutMe] = useState(false)

    const loginShow = () => {
        setShowLogin(true)
    }
    const registerShow = () => {
        setShowRegister(true)
    }
    const showAboutMe = () => {
        setAboutMe(true)
    }
  return (
    <div className='form-main-div'>
        <div className="center">
            <button className='user-btn' onClick={ loginShow }>Login</button>
            { showLogin && <Login setShowLogin={ setShowLogin } />}
            <button className='user-btn' onClick={ registerShow }>Register</button>
            { showRegister && <Registration setShowRegister ={ setShowRegister }/>}
        </div>
        <div className="help-img">
            <img src={ help} alt="" className='help-img' onClick={showAboutMe}/>
            {
                aboutMe && <AboutMe setAboutMe = { setAboutMe }/>
            }
        </div>
    </div>
  )
}
