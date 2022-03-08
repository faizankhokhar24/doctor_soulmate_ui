import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';



import { GoVerified } from 'react-icons/go';

import userImage from './../../Images/femaleIconCard.png'




const CardsMobileUser = () => {
  return (
    <>
     <div className='usersCardsContainerMobile'>
                        <div className='cardUserFirstRow'>
                            <div className='profileDiv'><img src={userImage} alt="" className="userImage" /></div>
                            <div className='userDataCard'>
                                <div className='userNameFR1'>
                                    <div className='nameAndTick'>
                                    <p className='nameUserCard'>Dr. Ayesha Azeem
                                    
                                    </p>
                                    <GoVerified className='tickUser'/>
                                    </div>
                                    
                                    <BsFillHeartFill className='heartIconUser'/>
                                    
                                </div>
                                <div className='userAgeGender'>
                                    <div>Female</div>
                                    <div className='lineUserCard'></div>
                                    <div>24</div>
                                    <div className='lineUserCard'></div>
                                    <div>Gujjer</div>
                                </div>
                                <div className='userProffesionCard'>
                                    <div>PG Trainee</div>
                                    <div className='lineUserCard'></div>
                                    <div>Gynecology</div>
                                    <div className='lineUserCard'></div>
                                    <div>Lahore</div>
                                </div>
                                <div className='useAppearanceCard'>
                                    <div>Good Looking</div>
                                    <div className='lineUserCard'></div>
                                    <div>Fair</div>
                                    <div className='lineUserCard'></div>
                                    <div>5.6' Tall</div>
                                </div>
                            </div> 
                        </div>
                        <div className='hrLineMidUserCard'></div>
                        <div className='secondRowUserCard'>
                            <div className='messageIconPartUser'>
                                <div><FaFacebookMessenger className='cardIconsMessageEye'/></div>
                                <div className='smsTxtCard'>Send Message</div>
                            </div>
                            <div className='eyeIconPartUser'>
                                <div><BsFillEyeFill className='cardIconsMessageEye'/></div>
                                <div className='smsTxtCard'>View Profile   </div>
                            </div>


                        </div>

                    </div>
    </>
  )
}

export default CardsMobileUser