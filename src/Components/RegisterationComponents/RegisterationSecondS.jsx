import React, { useState } from 'react'
import pic from './../../Images/maleIcon.png'
import pic1 from './../../Images/femaleIcon.png'
import { Link } from 'react-router-dom';
import picBackIcon from './../../Images/icons8-back-30.png'
const RegisterationSecondS = (props) => {

     const[show,setShow]=useState(0);

      const showData=()=>{
          setShow(1);
        
      }
      const hideDataSon=()=>{
          setShow(0);
          props.setGender('Male')
      }
       const hideDataDaughter=()=>{
        setShow(0);
        props.setGender('Female')

       }

      const genderSettingMale=()=>{
        props.setGender('Male')
      }
      const genderSettingFemale=()=>{
        props.setGender('Female')
      }

      

  return (
    <>
      <div className='topWebContainerRegisteration'>
       {/* <Link to='/'> <img src={picBackIcon} alt="" className="backIcon" /></Link> */}
        <div className='mainContainerRegisterationSecondS'>
            <h1>Create Profile for ? </h1>
            <div className='CreatePofileFor'>
                    <p className='textProfileFor' onClick={showData}>Myself</p>
                    <p className='textProfileFor' onClick={showData} id='textProfileFor'>My Sibling</p>
            </div>
            <div className='CreatePofileFor'>

              <Link to="/RegisterationFourthS">        <p className='textProfileFor' onClick={hideDataSon} >My Son</p></Link>
              <Link to="/RegisterationFourthS">      <p className='textProfileFor' onClick={hideDataDaughter} id='textProfileFor1'>My Daughter</p></Link>
            </div>
            <div className={show==1?'genderPartRegister1':'genderPartRegister'}>
                <h1>Select Gender</h1>
            <div className='selectGenderDiv'>
                    <Link to="/RegisterationFourthS" className='linkedGender'>
                            <div onClick={genderSettingMale}>
                            
                                <img  src={pic} alt="" className="maleRegisterImg" />
                                <p>Male</p>
                            </div>
                            <div  onClick={genderSettingFemale}>
                                <img src={pic1} alt="" className="maleRegisterImg" />
                                <p>Female</p>
                            
                            </div>
                     </Link>
                    
            </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default RegisterationSecondS