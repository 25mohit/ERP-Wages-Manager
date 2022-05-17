import React, { useEffect } from 'react'
import './SuccessWindow.css'

export const SuccessWindow = ({ setShowSuccess }) => {
    const closeSuccess =  () => {
        setShowSuccess(false)
    }
    useEffect(() => {
        setTimeout(() => {
            setShowSuccess(false)
        },3000)
    },[])
  return (
    <div className='seccess-window'>
            <button className='success-bt' onClick={ closeSuccess }>X</button>
            <p>Successfully Added</p>
    </div>
  )
}
