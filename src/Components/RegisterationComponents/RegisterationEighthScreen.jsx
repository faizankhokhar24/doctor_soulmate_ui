import { useFormik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Custom from "./SpinnerFiles/Custom";

const RegisterationEighthScreen = () => {
  
  const navigate = useNavigate();


  const validate=values=>{
   
    if(values.email && values.personalPhone && values.parentContact && values.anySocialLink)
    {
      navigate("/RegisterationNinthScreen");
    }
    const errors={}
   
  
  }
  const formik =useFormik({
    initialValues:{

      email:"",   
      personalPhone:"",
      parentContact:"",
      anySocialLink:""
     

    },
    validate,
    onSubmit:value=>{
        console.log(value)
    }
})
  return (
    <>

<div className="mainContainerWeb">
     
       
     <form className="containerCard" onSubmit={formik.handleSubmit}>
            <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                    <input   className="spinnerContent" type='email' 
                                     name="email" placeholder='Email'
                                        value={formik.values.email}

                                       onChange={formik.handleChange}
                                     />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                    <input   className="spinnerContent" type='text' 
                                     name="personalPhone" placeholder='Personal Phone'
                                        value={formik.values.personalPhone}

                                       onChange={formik.handleChange}
                                     />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                    <input   className="spinnerContent" type='text' 
                                     name="parentContact" placeholder='Parent Contact'
                                        value={formik.values.parentContact}

                                       onChange={formik.handleChange}
                                     />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                    <input   className="spinnerContent" type='text' 
                                     name="anySocialLink" placeholder='Any Social Link'
                                        value={formik.values.anySocialLink}

                                       onChange={formik.handleChange}
                                     />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          </form>
          </div>

          {/* <Link to='/RegisterationNinthScreen'><button>Move next screen</button></Link> */}

    </>
  )
}

export default RegisterationEighthScreen