import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ProfileUpdate.css'

export const ProfileUpdate = ({ setShowProfile }) => {
    const [office, setOffice] = useState('')
    const [designation, setDesignation] = useState('')
    const [salary, setSalary] = useState('')
    const [address, setAddress] = useState('')

    const user = useSelector(state => state.loggedInUser)
    const dispatch = useDispatch()
    const addProfile = (e) => {
            e.preventDefault()
        dispatch({
            type: 'ADD_PROFILE',
            payload:{
                office, designation, salary, 
            }
        })
        alert('success')
    }
    const closeModel = () => {
        setShowProfile(false)
    }
  return (
    <div className='profile-model-window'>
            <div className="profile-model-card">
                    <div className="update-header">
                           {user ? <span className='user-name'>Hi , {user.name}</span>  : <p>&nbsp;</p>}
                            <button className="closeModel" onClick={ closeModel }>X</button>
                    </div>
                    <div className="profile-form">
                        <h2>Update Your Profile</h2>
                                <form >
                                            <div className="single-field">
                                            <div className="label-div">
                                                <label htmlFor="user-name" className='form-label'>Company Name</label>
                                            </div>
                                            <div className="field-div">
                                                    <input type="text" name='user-name' placeholder='Enter your Company Name' value={ office } onChange={e => setOffice(e.target.value)} className='profle-input'/><br/>
                                            </div>
                                            </div>
                                            <div className="single-field">
                                            <div className="label-div">
                                                    <label htmlFor="user-name" className='form-label'>Designation</label>
                                            </div>
                                            <div className="field-div">
                                                    <input type="text" value={ designation } placeholder='Enter your Designation in your company or office' onChange={e => setDesignation(e.target.value)} className='profle-input' /><br/>
                                            </div>
                                            </div>
                                            <div className="single-field">
                                            <div className="label-div">
                                                    <label htmlFor="user-name" className='form-label'>Salary</label>
                                            </div>
                                            <div className="field-div">
                                                    <input type="number" value={ salary } placeholder='Enter your Monthly Salary' onChange={e => setSalary(e.target.value)} className='profle-input' /><br/>
                                            </div>
                                            </div>
                                            <div className="single-field">
                                            <div className="label-div">
                                                    <label htmlFor="user-name" className='form-label'>Address</label>
                                            </div>
                                            <div className="field-div">
                                                    <textarea placeholder='Enter your text' value={ address } onChange={e => setAddress(e.target.value)} className='profle-input-text-area'/>                                            
                                            </div>
                                            </div>
                                        <button onClick={ addProfile }>UPDATE PROFILE  +</button>
                                </form>
                    </div>
            </div>
    </div>
  )
}
