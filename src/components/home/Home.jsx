import React, { useState } from 'react'
import './Home.css'
import { Header } from '../header/Header'
import { WagesForm } from '../wagesForm/WagesForm'
import { WagesList } from '../wagesList/WagesList'

export const Home = () => {

  return (
    <div className='home-main-div'>
      <div className="header">
          <Header />
      </div>
      <div className="hero-section">
            <WagesForm />
          <WagesList />
      </div>
    </div>
  )
}
