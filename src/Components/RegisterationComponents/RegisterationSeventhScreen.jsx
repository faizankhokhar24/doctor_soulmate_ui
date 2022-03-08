import { useFormik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Custom from "./SpinnerFiles/Custom";
// import { handleInputChange } from "react-select/dist/declarations/src/utils";
export {useFormik} from 'formik'
const RegisterationSeventhScreen = () => {

  const navigate = useNavigate();

  const validate=values=>{
   
    const errors={}
    if(values.fatherOccupation && values.motherOccupation && values.siblings && values.socioEcnomicStatus && values.anyOtherInfo){
       navigate("/RegisterationEigthScreen");

    }
  
  }
    const fatherOccupation=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
      ]
      const motherOccupation=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
      ]
      
      const Siblings=[
        { value: '2', label: '2'},
        { value: '3', label: '3'},
        ]

      const socioEcnomicStatus=[
        { value: 'Average', label: 'Average'},
        { value: 'Lower', label: 'Lower'},
      ]
      const formik =useFormik({
        initialValues:{

          fatherOccupation:"",   
          motherOccupation:"",
          
            siblings:"",
         
            socioEcnomicStatus:"",
            anyOtherInfo:""

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
         <div className='spinnerMiniContainer' >
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={fatherOccupation}
                                        value={formik.values.fatherOccupation}
                                        placeholder="Father Occupation"
                                        onChange={(value)=>formik.setFieldValue('fatherOccupation',value.value)}
                                    
                                    />

                                    
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={motherOccupation}
                                        value={formik.values.Profession}
                                        placeholder="Mother Occupation"
                                        onChange={(value)=>formik.setFieldValue('motherOccupation',value.value)}
                                    
                                    />

                                   
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={Siblings}
                                        value={formik.values.Siblings}
                                        placeholder="Siblings"
                                        onChange={(value)=>formik.setFieldValue('siblings',value.value)}
                                    
                                    />

                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={socioEcnomicStatus}
                                        value={formik.values.socioEcnomicStatus}
                                        placeholder="SocioEcnomicStatus"
                                        onChange={(value)=>formik.setFieldValue('socioEcnomicStatus',value.value)}
                                    
                                    />

                                   
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <input   className="spinnerContent" type='text' 
                                     name="anyOtherInfo" placeholder='Any other info'
                                       value={formik.values.anyOtherInfo}

                                       onChange={formik.handleChange}
                                     />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          {/* <button>Submit</button> */}
          </form>
          </div>

         {/* <Link to="/RegisterationEigthScreen">   <button>move next page</button></Link> */}
    
    </>
  )
}

export default RegisterationSeventhScreen