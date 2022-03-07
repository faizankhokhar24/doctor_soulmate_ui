import { useFormik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Custom from "./SpinnerFiles/Custom";
export {useFormik} from 'formik'
const options=[
    {value:'Single',label:'Single'},
    {value:'Married',label:'Married'},
    {value:'Divorced',label:'Divorced'},
    {value:'Seperated',label:'Seperated'}


]

const Religion= [
    { value: 'Muslim', label: 'Muslim' },
    { value: 'Non-muslim', label: 'Non-muslim' },

  ]

export default function App(props) {

  const navigate = useNavigate();
    const[state,setState]=useState('')
    const[showFields,setShowFields]=useState(0);



    const validate=values=>{
        const errors={}

        if(!values.firstName){
            errors.firstName='Required'
            setState('required')
        }
     
        if( values.maritalStatus && values.religion && values.sect && values.cast){

            setShowFields(1);
            console.log("Hide")
        }
        if(values.lastName && values.firstName && values.maritalStatus && values.religion && values.sect && values.cast && values.clan && values.motherTongue){

            navigate('/RegisterationFourthSc');

        }


        return errors;
    }
 
      const Sect= [
        { value: 'Ahlesunat', label: 'Ahhlesunat' },
        { value: 'Ahlehadees', label: 'Ahlehadees' },
    
      ]
      const Cast= [
        { value: 'Jutt', label: 'Jutt' },
        { value: 'Mughal', label: 'Mughal' },
    
      ]
      const Clan= [
        { value: 'Irish', label: 'Irish' },
        { value: 'Japnese', label: 'Japnese' },
    
      ]
      const motherTongue=[
        { value: 'English', label: 'English' },
        { value: 'Arabic', label: 'Arabic' },
      ]
   

    const formik =useFormik({
        initialValues:{

            job:"painter",
            firstName:props.firstName,
            lastName:props.lastName,
            maritalStatus:"",
            religion:"",
            sect:"",
            cast:"",
            clan:"",
            motherTongue:""

        },
        validate,
        onSubmit:value=>{
            console.log(value)
        }
    })
 

  return (
    <>
        <div className="topWebContainerRegisteration">
     
       
        <form className="containerCard" onSubmit={formik.handleSubmit}>

                                <div className='spinnerMiniContainer'>
                                        <div className="divSpinner">   
                                        <input className="spinnerContent" placeholder="first name" type="text" id="firstName" name="firstName" onChange={formik.handleChange}  
                                         value={formik.values.firstName} required spellcheck="false"/>
                                
                                        <div>Required</div>
                                         </div>
                                </div>     
                                {/* {formik.errors.firstName?<div>{formik.errors.firstName}</div>:null} */}
                           

                                <div className='spinnerMiniContainer'>
                                        <div className="divSpinner">   
                                        <input className="spinnerContent" placeholder="last name" type="text" id="lastName" name="last name" onChange={formik.handleChange}  
                                         value={formik.values.lastName} required spellcheck="false"/>
                                
                                        <div className="required">Required</div>
                                         </div>
                                </div>  


                                            
                                <div className='spinnerMiniContainer' id={showFields==1?"spinnerMiniContainerMaritalStatusHide":""}>
                                    <div className="divSpinner">
                                    <Custom
                                        className="spinnerContent"
                                        options={options}
                                        value={formik.values.maritalStatus}
                                        placeholder="Select Marital Status"
                                        onChange={(value)=>formik.setFieldValue('maritalStatus',value.value)}
                                    
                                    />
                                    <div className="required">Required</div>

                                    </div>
                                
                             
                            
                                </div>

                                <div className='spinnerMiniContainer' id={showFields==1?"spinnerMiniContainerReligionHide":""}>
                                    <div className="divSpinner">
                                   

                                     <Custom options={Religion} 
                                         value={formik.values.religion}
                                         onChange={(value)=>formik.setFieldValue('religion',value.value)}
                                        placeholder="Select Religion" />
                                     <div className="required">Required</div>

                                 </div>
                                 
                                
                             
                            
                                </div>
                                <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                    <Custom options={Sect} 
                                         value={formik.values.sect}
                                         onChange={(value)=>formik.setFieldValue('sect',value.value)}
                                        placeholder="Select Sect" />

                                     <div className="required">Required</div>

                                 </div>
                                 
                                
                             
                            
                                </div>
                                
                                <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                  <Custom options={Cast} 
                                         value={formik.values.cast}
                                         onChange={(value)=>formik.setFieldValue('cast',value.value)}
                                        placeholder="Select Cast" />
                                     <div className="required">Required</div>

                                 </div>
                            
                                </div>
                                <div className='spinnerMiniContainer' id={showFields==1?"spinnerMiniContainerClanShow":"spinnerMiniContainerClan"}>
                                    <div className="divSpinner">
                                   

                                    <Custom options={Clan} 
                                         value={formik.values.clan}
                                         onChange={(value)=>formik.setFieldValue('clan',value.value)}
                                        placeholder="Select Clan" />
                                     <div className="required">Required</div>

                                 </div>
                            
                                </div>
                                <div className='spinnerMiniContainer' id={showFields==1?"spinnerMiniContainerMTongueShow":"spinnerMiniContainerMTongue"}>
                                    <div className="divSpinner">
                                   

                                    <Custom options={motherTongue} 
                                         value={formik.values.motherTongue}
                                         onChange={(value)=>formik.setFieldValue('motherTongue',value.value)}
                                        placeholder="Select Mother Tongue" />
                                     <div className="required">Required</div>

                                 </div>
                            
                                </div>
                                {/* <button type="submit"> Submit</button>
                                <Link to='/RegisterationFourthSc'>   <button >Move to the fourth Screen</button> </Link> */}
                          
                                    
                                                        
                                

        </form>
        </div>
     
    </>
  );
}
