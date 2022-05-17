import React, { useState } from 'react'
import './Header.css'
import { ProfileUpdate } from '../profileUpdate/ProfileUpdate'
import { useDispatch } from 'react-redux'

export const Header = () => {
    const [showProfile, setShowProfile] = useState(false)
    const profileShow = () => {
        setShowProfile(true)
    }
    const dispatch = useDispatch()

    const userLogout = () => {
      dispatch({
        type: "LOGOUT_USER"
      })
    }
  return (
    <div className='nevbar-div'>
        <button onClick={ profileShow } className='showProfile'>Add Profile</button>
        <button onClick={ userLogout } className='showProfile'>Logout Securely</button>
        { showProfile && <ProfileUpdate setShowProfile = { setShowProfile }/>}
        
    </div>
  )
}
