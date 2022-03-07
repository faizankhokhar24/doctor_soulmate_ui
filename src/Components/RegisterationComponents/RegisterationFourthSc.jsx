import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Select from "react-select";  
import { useFormik } from "formik";
import Custom from "./SpinnerFiles/Custom";
export {useFormik} from 'formik'

const options=[
  {value:'simple',label:'simple'},
  {value:'normal',label:'normal'},
 


]
const RegisterationFourthSc = () => {

  const navigate = useNavigate();
  const validate=values=>{
   
    const errors={}
    if(values.build && values.complextion && values.looks && values.height)
    {

  navigate('/RegisterationFifthScreen');
    }
    


    return errors;
}


      
    const Looks=[
        { value: 'Slim', label: 'Slim'},
        { value: 'Athletic', label: 'Athletic'},
      ]
      const Complextion=[
        { value: 'Athlete', label: 'Athlete'},
        { value: 'Skinny', label: 'Skinny'},
      ]
      const build=[
        { value: 'flat', label: 'flat'},
        { value: 'normal', label: 'normal'},
      ]

      const height=[
        { value: '5.10', label: '5.10 Feet'},
        { value: '5.11', label: '5.11 Feet'},
      ]

      const formik =useFormik({
        initialValues:{

           looks:"",
           complextion:"",
           build:"",
           height:""
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
                                        options={Looks}
                                        value={formik.values.looks}
                                        placeholder="Select Looks"
                                        onChange={(value)=>formik.setFieldValue('looks',value.value)}
                                    
                                    />

                                   
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={options}
                                        value={formik.values.complextion}
                                        placeholder="Complextion"
                                        onChange={(value)=>formik.setFieldValue('complextion',value.value)}
                                    
                                    />
                                     <div className="required">Required</div>

                                    
                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   
                                    <Custom
                                        className="spinnerContent"
                                        options={build}
                                        value={formik.values.build}
                                        placeholder="Select Build"
                                        onChange={(value)=>formik.setFieldValue('build',value.value)}
                                    
                                    />

                                     
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                    <Custom
                                        className="spinnerContent"
                                        options={height}
                                        value={formik.values.height}
                                        placeholder="Select Height"
                                        onChange={(value)=>formik.setFieldValue('height',value.value)}
                                    
                                    />
                                   
                                     <div className="required">Required</div>

                                 </div>

          </div>
          {/* <button type='submit'>Submit</button> */}
          </form>
 </div>



       {/* <Link to="/RegisterationFifthScreen" > <button>Move to the fifth Screen</button></Link> */}
         
    </>
  )
}

export default RegisterationFourthSc