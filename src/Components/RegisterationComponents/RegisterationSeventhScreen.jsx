import React from 'react'
import { Link } from 'react-router-dom';
import Select from "react-select"; 
const RegisterationSeventhScreen = () => {
    const fatherOccupation=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
      ]
      const motherOccupation=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
      ]
      
      const Siblings=[
        { value: 'Doctor', label: 'Doctor'},
        { value: 'Engineer', label: 'Engineer'},
        ]

      const socioEcnomicStatus=[
        { value: 'Average', label: 'Average'},
        { value: 'Lower', label: 'Lower'},
      ]
  return (
    <>
    <div className="mainContainerWeb">
     
       
     <form className="containerCard">
         <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={fatherOccupation} placeholder="Select Father Occupation" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={motherOccupation} placeholder="Select Mother Occupation" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={Siblings} placeholder="Select Siblings" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={socioEcnomicStatus} placeholder="Select Socieoconmic status" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <input type='text' placeholder='Any other info'/>
                                     <div className="required">Required</div>

                                 </div>

          </div>
          </form>
          </div>

         <Link to="/RegisterationEigthScreen">   <button>move next page</button></Link>
    
    </>
  )
}

export default RegisterationSeventhScreen