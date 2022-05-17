import React from 'react'
import './AboutMe.css'
import me from '../images/me.jpg'
import facebok from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import linkdin from '../images/linkdin.png'

export const AboutMe = ({ setAboutMe }) => {
    const closeModel =  () => {
        setAboutMe(false)
    }
  return (
    <div className='about-me-div'>
            <div className="container">
                    <div className="header-div">
                                <div>
                                </div>
                                <div>
                                        <button onClick={ closeModel }>X</button>
                                </div>
                    </div>
                    <div className="body">
                            <div className="profile-photo">
                                    <div className='profile-pic'>
                                            <img src={ me } alt="" className='me-photo' />
                                    </div>
                                    <div className='personal-detail'>
                                            {/* <h1>about me</h1> */}
                                            <p className="name">mohit agarwal</p>
                                            <p className="skills">
                                                    <strong>Professional skills</strong>
                                                    <span>ReactJS</span>
                                                    <span>HTML5</span>
                                                    <span>JavaScript</span>
                                                    <span>NodeJS</span>
                                                    <span>SCSS</span>
                                                    <span>Material UI</span>
                                                    <span>Computer Hardware Engenner</span><br />
                                                    <span>Bootstrap</span>
                                            </p>
                                            <p className="skills">
                                                <strong>Education</strong>
                                                <span>BCOM / SS Jain subodh college jaipur</span>
                                            </p>
                                            <p className="skills">
                                                <strong>cath me on</strong>
                                                <div className='ul-div'>
                                                    <div className='social-media'><img src={ github } alt="" /><div className='social-text'>
                                                        <a href='https://github.com/25mohit' target='_blank' rel="noreferrer">25mohit</a></div></div>
                                                    <div className='social-media'><img src={ facebok } alt="" /><div className='social-text'>
                                                    <a href='https://www.facebook.com/mohit724agarwal' target='_blank' rel="noreferrer">mohit724agarwal</a></div></div>
                                                    <div className='social-media'><img src={twitter} alt="" /><div className='social-text'>
                                                    <a href='https://twitter.com/mo_hit24' target='_blank' rel="noreferrer">mo_hit24</a></div></div>
                                                    <div className='social-media'><img src={instagram} alt="" /><div className='social-text'>
                                                    <a href='https://www.instagram.com/im_hit_/' target='_blank' rel="noreferrer">im_hit_</a></div></div>
                                                    <div className='social-media'><img src={linkdin} alt="" /><div className='social-text'>
                                                    <a href='https://www.linkedin.com/in/agarwal24/' target='_blank' rel="noreferrer">agarwal24</a></div></div>
                                                </div>
                                            </p>
                                            <p className="skills">
                                                <strong>Location</strong>
                                                <span>Jaipur, rajasthan</span>
                                            </p>
                                            <p className="skills">
                                                <strong>Contact me</strong>
                                                <span>9680038708</span>
                                                <span className='email-text'>mohit724agarwal@gmail.com</span>
                                            </p>
                                            <p className="skills">
                                                <strong>my other projects</strong>
                                                <span><a href='https://twitter-clone-2022.herokuapp.com/' target='_blank' rel="noreferrer">Twitter Clone</a></span>
                                                <span><a href='https://mytodo22.herokuapp.com/' target='_blank' rel="noreferrer">TODO App</a></span>
                                                <span><a href='https://erp-wages-manger.herokuapp.com/' target='_blank' rel="noreferrer">Wages manager (ERP)</a></span>
                                            </p>
                                    </div>
                            </div>
                    </div>
                    <div className="bottom-text">
                            <p>looking to work for a challenging and responsible Position in s professional organization where i can contribute to the successfull growth of the organization utilizing my skills and competencies.</p>
                    </div>
            </div>
    </div>
  )
}
