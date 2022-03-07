import React from 'react'
import { Link } from 'react-router-dom';
import Select from "react-select"; 
const RegiseterationSixthScreen = () => {
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


  return (
    <>
    <div className="mainContainerWeb">
     
       
     <form className="containerCard">
     <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={Profession} placeholder="Select Looks" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={JobStatus} placeholder="Select Complextion" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={WorkPlace} placeholder="Select Build" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={Qualification} placeholder="Select Height" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <Select options={Instituition} placeholder="Select Height" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='Monthly Incom'>
                                    <div className="divSpinner">
                                   

                                     <Select options={monthlyIncome} placeholder="Select Height" />
                                     <div className="required">Required</div>

                                 </div>

          </div>
          </form>

    </div>
     <Link to="/RegisterationSeventhScreen">   <button>Move to the seventh Screen</button></Link>

      
    </>
  )
}

export default RegiseterationSixthScreen