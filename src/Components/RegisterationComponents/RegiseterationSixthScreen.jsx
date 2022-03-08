import { useFormik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Custom from "./SpinnerFiles/Custom";
export {useFormik} from 'formik'
const RegiseterationSixthScreen = () => {
  const navigate = useNavigate();

  const validate=values=>{
   
    const errors={}
    if(values.jobStatus && values.profession && values.workPlace && values.qualification && values.instituition && values.monthlyIncome)
    {
      navigate("/RegisterationSeventhScreen");

    }
  
  }
    const Profession=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
      ]
      const JobStatus=[
        { value: 'Clerk', label: 'Clerk'},
        { value: 'Officer', label: 'Officer'},
      ]
      const WorkPlace=[
        { value: 'Gujranwala', label: 'Gujranwala'},
        { value: 'Lahore', label: 'Lahore'},
      ]

      const Qualification=[
        { value: 'Matric', label: 'Matric'},
        { value: 'Graduation', label: 'Graduation'},
      ]
      const Instituition=[
        { value: 'GC Lahore', label: 'GC Lahore'},
        { value: 'Mindbridge', label: 'Mindbridge'},
      ]

      const monthlyIncome=[
        { value: '50k', label: '50k'},
        { value: '60k', label: '60k'},
      ]

      const formik =useFormik({
        initialValues:{

            profession:"",   
            jobStatus:"",
            workPlace:"",
            qualification:"",
            monthlyIncome:"",
            instituition:""

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
                                   

                                    <Custom
                                        className="spinnerContent"
                                        options={Profession}
                                        value={formik.values.Profession}
                                        placeholder="Select Profession"
                                        onChange={(value)=>formik.setFieldValue('profession',value.value)}
                                    
                                    />
                                  
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={JobStatus}
                                        value={formik.values.JobStatus}
                                        placeholder="Select Job"
                                        onChange={(value)=>formik.setFieldValue('jobStatus',value.value)}
                                    
                                    />

                                    
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                    <Custom
                                        className="spinnerContent"
                                        options={WorkPlace}
                                        value={formik.values.WorkPlace}
                                        placeholder="Select workplace"
                                        onChange={(value)=>formik.setFieldValue('workPlace',value.value)}
                                    
                                    />
                                    
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                    <Custom
                                        className="spinnerContent"
                                        options={Qualification}
                                        value={formik.values.Qualification}
                                        placeholder="Select Qualification"
                                        onChange={(value)=>formik.setFieldValue('qualification',value.value)}
                                    
                                    />
                                   
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={Instituition}
                                        value={formik.values.maritalStatus}
                                        placeholder="Select Instituition"
                                        onChange={(value)=>formik.setFieldValue('instituition',value.value)}
                                    
                                    />

                                     
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={monthlyIncome}
                                        value={formik.values.monthlyIncome}
                                        placeholder="Select Monthly Income"
                                        onChange={(value)=>formik.setFieldValue('monthlyIncome',value.value)}
                                    
                                    />
                                  
                                     <div className="required">Required</div>

                                 </div>

          </div>
          {/* <button type="submit">submit</button> */}
          </form>

    </div>
     {/* <Link to="/RegisterationSeventhScreen">   <button>Move to the seventh Screen</button></Link> */}

      
    </>
  )
}

export default RegiseterationSixthScreen