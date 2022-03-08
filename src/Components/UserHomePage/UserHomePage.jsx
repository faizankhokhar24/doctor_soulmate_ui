import React, { useState } from 'react'
import './UserHomePage.css'
import { FaHome } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { SiGooglemessages } from 'react-icons/si';
import { FaUserTag } from 'react-icons/fa';
import CardsMobile from './../UserHomePage/CardsMobileUser' 



const UserHomePage = () => {

    const[changeBackground,setChangeBackground]=useState(0);
    const topBarClicked1=()=>{
        console.log("clicked")
        setChangeBackground(1);
    }
    const topBarClicked2=()=>{
        console.log("clicked")
        setChangeBackground(2);
    }
    const topBarClicked3=()=>{
        console.log("clicked")
        setChangeBackground(3);
    }
    const topBarClicked4=()=>{
        console.log("clicked")
        setChangeBackground(4);
    }

  return (
    <>  
        <div className='mainContainerUserHome'>
                    <div className='topUserHomeContainer'> 
                        <div className={changeBackground==1?'topBarTxt':'topBarTxt1'} onClick={topBarClicked1}>
                            Searched
                        </div>
                        <div className={changeBackground==2?'topBarTxt':'topBarTxt1'} onClick={topBarClicked2}>
                            JUST JOINED
                        </div>
                        <div className={changeBackground==3?'topBarTxt':'topBarTxt1'} onClick={topBarClicked3}>
                            MATCHES
                        </div>
                        <div className={changeBackground==4?'topBarTxt':'topBarTxt1'} onClick={topBarClicked4}>
                            PREMIUM
                        </div>
                    </div>
                    <div   className='arrayCardUser'>{[...Array(3)].map(()=>{
                                return(
                                    <CardsMobile/>
                                )
                            })}</div>

                           
                   

                    <div className='bottomBarUserHomeContainer'>
                            <div className='bottomUserHomeMobile'>
                                <FaHome className='homeIconBottomMobile'/>
                                <p className='bottomBarTxt'>Home</p>
                            </div>
                            <div className='bottomUserHomeMobile'>
                                    <AiOutlineSearch className='homeIconBottomMobile'/>
                                    <p className='bottomBarTxt'>Search</p>


                            </div>
                            <div className='bottomUserHomeMobile'>
                                <SiGooglemessages className='homeIconBottomMobile'/>
                                <p className='bottomBarTxt'>Messages</p>

                            </div>
                            <div className='bottomUserHomeMobile'>

                                <FaUserTag className='homeIconBottomMobile'/>
                                <p className='bottomBarTxt'>Login</p>

                            </div>

                    </div>
        </div>
    </>
  )
}

export default UserHomePage