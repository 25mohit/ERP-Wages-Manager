import React, { useEffect, useState } from 'react'
import './WagesForm.css'
import { useDispatch } from 'react-redux'
import { SuccessWindow } from '../successWindow/SuccessWindow'
import { ErrorMessage } from '../errorMessage/ErrorMessage'

export const WagesForm = () => {
    const [wages, setwages] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    const dispatch = useDispatch()
    
    const addWages = () => {
      if(wages && price != ''){
            dispatch({
                type:'ADD_WAGES',
                payload: {
                    id:(new Date).getTime(),
                    wages, price, date
                }
              })
              setShowSuccess(true)
          } else {
            setShowError(true)
          
          }
    }
  return (
    <div className='wages-form-div'>
      <h1>Wages Form</h1>
            <input type="text" placeholder=' Your wages name' className='wages-text-field' value={ wages } onChange={ e=> setwages(e.target.value)} /><br/>
            <input type="number" placeholder='Enter price' className='wages-text-field' value={ price } onChange={ e => setPrice(e.target.value) }/><br/>
            <input type="date" placeholder='Enter Date' className='wages-text-field' value={ date } onChange={ e => setDate(e.target.value)}/><br/>
            <button onClick={ addWages }>ADD</button>
            {
              showError && <ErrorMessage setShowError = { setShowError } />
            }
            {
              showSuccess &&  <SuccessWindow setShowSuccess = { setShowSuccess } />
            }
            
    </div>
  )
}
