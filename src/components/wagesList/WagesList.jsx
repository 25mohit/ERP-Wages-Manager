import React from 'react'
import './WagesList.css'
import { useDispatch, useSelector } from 'react-redux'

export const WagesList = () => {
    const wages = useSelector(state => state.wages)
    const userProfile = useSelector(state => state.userProfile)

    const dispatch = useDispatch()

    const deleteWage = (id) => {
      dispatch({
        type: 'DELETE_WAGES',
        payload: id
      })
      console.log( id )
    }

  return (
    <div className='main-wages-div'>
      <h1>Wages List</h1>
        <div className="employe-detail">
            <p>Office name : {userProfile.office} </p>
            <p>Designation : {userProfile.designation}</p>
            <p>Salary : {userProfile.salary}</p>
            <p></p>
        </div>
        <div className="finale-amount">
            <div className="reamining">
                <p className="remining-amout">₹ {userProfile.salary-wages.reduce((acc, wage ) => acc + parseInt( wage.price ),0)}<span>Remining this month</span></p>
            </div>
            <div className="total-wages">
                <p className="total-amout-wages">₹ {wages.reduce((acc, wage ) => acc + parseInt( wage.price ),0)}<span>Total Expenditures</span></p>
            </div>
        </div>
        {
          wages.map((wage, index) => <div key={ wage.id } className='wages-div-name'>
            <p className='index'>{ index+1 } .</p>
            <p className="wages-name">{ wage.wages }</p>
            <p className="price"> ₹ { wage.price }</p>
            <p className="date">{ wage.date }</p>
            <button onClick={ () => {deleteWage(wage.id)} }>Delete</button>
           </div> )
        }
        
    </div>
  )
}
