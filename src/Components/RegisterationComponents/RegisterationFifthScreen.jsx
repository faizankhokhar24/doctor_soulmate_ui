import React from "react";
import { useFormik } from "formik";
import Select from "react-select";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Custom from "./SpinnerFiles/Custom";
export {useFormik} from 'formik';

const RegisterationFifthScreen = () => {


  const validate=values=>{
    const errors={}

   


    return errors;
}
  const Country = [
    { value: "Pakistan", label: "Pakistan" },
    { value: "India", label: "India" },
  ];
  const Province = [
    { value: "Punjab", label: "Punjab" },
    { value: "Sindh", label: "Sindh" },
  ];
  const City = [
    { value: "Gujranwala", label: "Gujranwala" },
    { value: "Lahore", label: "Lahore" },
  ];

  const House = [
    { value: "Owned", label: "Owned" },
    { value: "Rent", label: "Rent" },
  ];
  const formik =useFormik({
    initialValues:{

        Country:"",  
        Province:"",
        City:"",
        House:"",
        futurePlan:"",
      otherNationality:"",
     

    },
    validate,
    onSubmit:value=>{
        console.log(value)
    }
})
  return (
    <>
      <div className="topWebContainerRegisteration">
        <div className="mainContainerWeb">
          <form className="containerCard" onSubmit={formik.handleSubmit}>
            <div className="spinnerMiniContainer">
              <div className="divSpinner">
              <Custom
                                        className="spinnerContent"
                                        options={Country}
                                        value={formik.values.Country}
                                        placeholder="Select Country"
                                        onChange={(value)=>formik.setFieldValue('Country',value.value)}
                                    
                  />
                
                <div className="required">Required</div>
              </div>
            </div>
            <div className="spinnerMiniContainer">
              <div className="divSpinner">
              <Custom
                                        className="spinnerContent"
                                        options={Province}
                                        value={formik.values.maritalStatus}
                                        placeholder="Select Province"
                                        onChange={(value)=>formik.setFieldValue('Province',value.value)}
                                    
                                    />
               
                <div className="required">Required</div>
              </div>
            </div>
            <div className="spinnerMiniContainer">
              <div className="divSpinner">
              <Custom
                                        className="spinnerContent"
                                        options={City}
                                        value={formik.values.City}
                                        placeholder="Select Marital Status"
                                        onChange={(value)=>formik.setFieldValue('City',value.value)}
                                    
                                    />
         
                <div className="required">Required</div>
              </div>
            </div>
            <div className="spinnerMiniContainer">
              <div className="divSpinner">
              <Custom
                                        className="spinnerContent"
                                        options={House}
                                        value={formik.values.maritalStatus}
                                        placeholder="House"
                                        onChange={(value)=>formik.setFieldValue('House',value.value)}
                                    
                                    />
                
                <div className="required">Required</div>
              </div>
            </div>
            <div className="spinnerMiniContainer">
              <div className="divSpinner">
              <input className="spinnerContent" placeholder="Any other nationality" type="text"  name="anyOtherNAtionality" onChange={formik.handleChange}  
                           value={formik.values.otherNationality} required spellcheck="false"/>
               
                <div className="required">Required</div>
              </div>
            </div>

            <div className="spinnerMiniContainer">
              <div className="divSpinner">
              <input className="spinnerContent" placeholder="Future plan to live"     onChange={formik.handleChange}  
                           value={formik.values.futurePlan} required spellcheck="false"/>
                <div className="required">Required</div>
              </div>
            </div>
            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
      <Link to="/RegisterationSixthScreen">
        {" "}
        <button>Move to the sixth screen</button>
      </Link>
    </>
  );
};

export default RegisterationFifthScreen;
