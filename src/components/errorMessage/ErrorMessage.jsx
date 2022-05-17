import React, { useEffect } from 'react'
import './ErrorMessage.css'

export const ErrorMessage = ( { setShowError }) => {
    useEffect(() =>{
        setTimeout(() => {
          setShowError(false)
        },3000)
      },[])
    const closeError = () => {
        setShowError(false)
    }
  return (
    <div className='error-window'>
            <button onClick={ closeError }>X</button>
            <p>Please write Something</p>
    </div>
  )
}
