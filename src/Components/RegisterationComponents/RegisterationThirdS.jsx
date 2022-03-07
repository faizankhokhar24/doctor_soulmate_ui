import React, { useState } from 'react'
import {useFormik} from 'formik'
import { Link, Navigate, useNavigate } from 'react-router-dom';



import Select from 'react-select'


const RegisterationThirdS = (props) => {

  
    const[DOB,setDOB]=useState();


    
    const navigate = useNavigate()


 

    const [selectedOption, setSelectedOption] = useState("none1");

    const sect=['shia','suni','dubandi']
    const cast=['ghumman','arain','khokhar']
    const motherTongue=['Punjabi','Urdu','English','Arabic  ','Punjabi','Urdu','English','Arabic  ','Punjabi','Urdu','English','Arabic  ','Punjabi','Urdu','English','Arabic  ','Punjabi','Urdu','English','Arabic']


    const options = [
        { value: "none", label: "Empty" },
        { value: "left", label: "Open Left" },
        { value: "right", label: "Open Right" },
        {
          value: "tilt,left",
          label: "Tilf and Open Left"
        },
        {
          value: "tilt,right",
          label: "Tilf and Open Right"
        }
      ];
      const handleTypeSelect = e => {
        setSelectedOption(e.value);
        console.log(e.value);
      };
 
console.log(props.lastName);

    const validate=values=>{
        const errors={}

        if(!values.firstName){
            errors.firstName='Required'
        }
        else if(values.firstName.length < 3){
            errors.firstName='Please enter name having more than 5 alphbets'


        }
        if(!values.lastName){
            errors.lastName='Required'
        }
        else if(values.firstName.length < 3){
            errors.firstName='Please enter name having more than 5 alphbets'


        }

       
        if(!values.Religion){
            errors.Religion='Please select an option'

        }
        if(!values.MaritalStatus)
        {
            errors.MaritalStatus='Please select an option'

        }
        if(!values.Sect)
        {
            errors.Sect='Please select an option'

        }
        if(!values.cast){
            errors.cast='Please select an option'


        }
        if(!values.motherTongue){
            errors.motherTongue='Please select an option'
        }
        if(!values.Birthday){
            errors.Birthday='Please select your date of birth'

           
            }
        if(values.Birthday){
           
                const currentDate=new Date(values.Birthday);

                const years= currentDate.getFullYear();
                setDOB(years);
                if(years>2004){
                    errors.Birthday=' you must be older than 18 to use this site '

                }
        }
        if(values.firstName && values.lastName && values.Religion && values.MaritalStatus && 
            values.Sect && values.cast && values.motherTongue && values.Birthday){
            const currentDate=new Date(values.Birthday);
            const years= currentDate.getFullYear();
            setDOB(years);
           if(years<2004){
            // navigate('/');

            }
           

        }

        return errors;
    }



    const formik=useFormik({
        initialValues:{
            firstName:props.firstName,
            lastName:props.lastName,
          
            Religion:'',
            Birthday:'',
           
            handleTypeSelect:(e)=>{
                    setSelectedOption(e.value);
                    console.log(selectedOption,'inside Object')
                    return e.value
                    
            },
            Direction:selectedOption
        
    },

     
        validate,
        onSubmit: values =>{
            alert(JSON.stringify(values, null,2))
        }
    })
    console.log(props.gender);
  
    console.log(selectedOption,"Selected Option")


 
    
    
    
  return (
    <>
            <div className='mainContainerRegisterThirdS'>
                    <form onSubmit={formik.handleSubmit} className='formRegister'>
                         <div className="input-block">
                            <input type="text" id="firstName" name="firstName" onChange={formik.handleChange}  
                            value={formik.values.firstName} required spellcheck="false"/>
                            <em className="placeholder">
                                first name
                            </em>
                        </div>
                        {formik.errors.firstName?<div>{formik.errors.firstName}</div>:null}
                    
                        <div className="input-block">
                            <input type="text" id="lastName" name="lastName" onChange={formik.handleChange} 
                             value={formik.values.lastName} required spellcheck="false"/>
                            <em className="placeholder">
                            last name
                            </em>
                        </div>
                        {formik.errors.lastName?<div>{formik.errors.lastName}</div>:null}

                       <div className='spinnerParentDiv'>
                        
                           <input type="date" id="Birthday" name="Birthday" onChange={formik.handleChange} value={formik.values.Birthday}/>


                        </div>
                          {formik.errors.Birthday?<div>{formik.errors.Birthday}</div>:null} 



                         <div className='spinnerParentDiv'>

                        
                        <select
                                name="MaritalStatus"
                                value={formik.values.MaritalStatus}
                                onChange={formik.handleChange}
                                style={{ display: 'block' }}
                                className='dropdownRegister'
                            
                            >
                                <option  value="" selected="true"  disabled label="Marital Status" />
                                <option name="Single"  value='Single' label="Single" />
                                <option name="Married" value='Married' label="Married" />
                                <option name="Divorced"  value='Divorced' label="Divorced" />
                                <option name="Seperated" value='Seperated' label="Seperated" />
                                
                            </select>
                        </div>
                         {formik.errors.MaritalStatus?<div>{formik.errors.MaritalStatus}</div>:null}
                         <div className='spinnerParentDiv'>
                        
                            <select
                                    name="Religion"
                                    value={formik.values.Religion}
                                    onChange={formik.handleChange}
                                    style={{ display: 'block' }}
                                    className='dropdownRegister'
                                
                                >
                                    <option  value="" disabled label="Select a Religion" />
                                    <option name="muslim"  value='muslim' label="muslim" />
                                    <option name="non-muslim" value='non-muslim' label="non-muslim" />
                                    
                                </select>
                            </div>
                            {formik.errors.Religion?<div>{formik.errors.Religion}</div>:null}

                        <div className='spinnerParentDiv'>
                                
                                <select
                                        name="Sect"
                                        value={formik.values.Sect}
                                        onChange={formik.handleChange}
                                        style={{ display: 'block' }}          
                                        className='dropdownRegister'
                                    
                                    >
                                         <option  name='Select Sect' value="" selected="true" disabled="Select Sect" label='Select Sect'/>
                                        {sect.map((data, index) => (
                                            
                                            <option name={data}  label={data} value={data}/>
                                          
                                            ))}
                                        
                                    </select>
                            </div>
                            {formik.errors.Religion?<div>{formik.errors.Sect}</div>:null}
                            
                            <div className='spinnerParentDiv'>
                                
                                <select
                                        name="cast"
                                        value={formik.values.cast}
                                        onChange={formik.handleChange}
                                        style={{ display: 'block' }}          
                                        className='dropdownRegister'
                                    
                                    >
                                         <option  name='Select Sect' value="" selected="true" disabled="Select Sect" label='Select Cast'/>
                                        {cast.map((data, index) => (
                                            
                                            <option name={data}  label={data} value={data}/>
                                          
                                            ))}
                                        
                                    </select>
                            </div>
                            
                        {formik.errors.Religion?<div>{formik.errors.cast}</div>:null}
                        <div className='spinnerParentDiv'>
                        
                        <select
                                name="MaritalStatus"
                                value={formik.values.MaritalStatus}
                                onChange={formik.handleChange}
                                style={{ display: 'block' }}
                                className='dropdownRegister'
                            
                            >
                                <option  value="" selected="true"  disabled label="Marital Status" />
                                <option name="Single"  value='Single' label="Single" />
                                <option name="Married" value='Married' label="Married" />
                                <option name="Divorced"  value='Divorced' label="Divorced" />
                                <option name="Seperated" value='Seperated' label="Seperated" />
                                
                            </select>
                        </div>
                        {formik.errors.Religion?<div>{formik.errors.Religion}</div>:null}
                        <div className='spinnerParentDiv'>
                                
                                <select
                                        name="motherTongue"
                                        value={formik.values.motherTongue}
                                        onChange={formik.handleChange}
                                        style={{ display: 'block' }}          
                                        className='dropdownRegister'
                                    
                                    >
                                         <option  name='Mother Tongue' value="" selected="true" disabled="Mother Tongue" label='Mother Tongue'/>
                                        {motherTongue.map((data, index) => (
                                            
                                            <option name={data}  label={data} value={data}/>
                                          
                                            ))}
                                        
                                    </select>
                            </div>
                            
                        {formik.errors.Religion?<div>{formik.errors.motherTongue}</div>:null}



                        
    
                        
                    <button>submit</button>
                    <p>year is {DOB} </p>

                 <Link to='/RegisterationFourthS'>   <button >Move to the fourth Screen</button> </Link>

                   
                 <Select
                    name='direction'
                    options={options}
                    onChange={handleTypeSelect}
                  
                    value={options.filter(function(option) {
                  
                     
                        return formik.values.direction === selectedOption;

                   

                       
                    
        })}
        label="Single select"
      />

                 

                </form>

                  


            </div>
    </>
  )
}

export default RegisterationThirdS