import { useFormik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Custom from "./SpinnerFiles/Custom";
export {useFormik} from 'formik'
const RegisterationNinthScreen = () => {

      const[showFields,setShowFields]=useState(0);

      
      const navigate = useNavigate();
    const fatherOccupation=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
      ]
      const motherOccupation=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
      ]
      const Province= [
        { value: 'punjab', label: 'punjab' },
        { value: 'sindh', label: 'sindh' },
    
      ]
      const city= [
        { value: 'lahore', label: 'lahore' },
        { value: 'karachi', label: 'karachi' },
    
      ]
      const sect= [
        { value: 'Ahlesunat', label: 'Ahhlesunat' },
        { value: 'Ahlehadees', label: 'Ahlehadees' },
    
      ]
      const cast= [
        { value: 'Jutt', label: 'Jutt' },
        { value: 'Mughal', label: 'Mughal' },
    
      ]
      const Siblings=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
        ]

      const socioEcnomicStatus=[
        { value: 'Average', label: 'Average'},
        { value: 'Lower', label: 'Lower'},
      ]
      const validate=values=>{
        const errors={}
        if(values.fatherOccupation && values.motherOccupation && values.socioEcnomicStatus && values.cast)
        {
          setShowFields(1);
        }
        if(values.fatherOccupation && values.motherOccupation && values.socioEcnomicStatus && values.cast &&  values.sect && values.Province && values.city )
        {
          navigate("/UserHomePage");


        }
      
     
        return errors;
    }
    const formik =useFormik({
      initialValues:{

        fatherOccupation:"",
        motherOccupation:"",
        socioEcnomicStatus:"",
        cast:"",
        sect:"",
        Province:"",
        city:""

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
             <div className='spinnerMiniContainer' id={showFields==1?"hideFOSelect":""}>
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
          <div className='spinnerMiniContainer' id={showFields==1?"showMOSelect":""}>
                                    <div className="divSpinner">
                                   

                                    <Custom
                                        className="spinnerContent"
                                        options={motherOccupation}
                                        value={formik.values.motherOccupation}
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
                                        options={socioEcnomicStatus}
                                        value={formik.values.Siblings}
                                        placeholder="Socioeconomic Status"
                                        onChange={(value)=>formik.setFieldValue('socioEcnomicStatus',value.value)}
                                    
                                    />
                                    

                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                    <Custom
                                        className="spinnerContent"
                                        options={cast}
                                        value={formik.values.cast}
                                        placeholder="select cast"
                                        onChange={(value)=>formik.setFieldValue('cast',value.value)}
                                    
                                    />
                                   

                                     
                                     <div className="required">Required</div>

                                 </div>

          </div>
         
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                    <Custom
                                        className="spinnerContent"
                                        options={sect}
                                        value={formik.values.sect}
                                        placeholder="Sect"
                                        onChange={(value)=>formik.setFieldValue('sect',value.value)}
                                    
                                    />
                                   

                                    
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={Province}
                                        value={formik.values.Province}
                                        placeholder="Province"
                                        onChange={(value)=>formik.setFieldValue('Province',value.value)}
                                    
                                    />

                                     
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer' id={showFields==1?"showCitySelect":"hideCitySelect"}>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={city}
                                        value={formik.values.city}
                                        placeholder="City"
                                        onChange={(value)=>formik.setFieldValue('city',value.value)}
                                    
                                    />
                                  
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer' id={showFields==1?"showSocioSelect":"hideSocioSelect"}>
                                    <div className="divSpinner">
                                   

                                     <Select options={socioEcnomicStatus} placeholder="Any Requirement" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <button type="submit">Submit</button>
          </form>
          <Link to='/UserHomePage'><button>Move Home Page</button></Link>

</div>         
    </>
  )
}

export default RegisterationNinthScreen