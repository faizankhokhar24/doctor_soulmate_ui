import React from 'react'
import { Link } from 'react-router-dom'

const RegisterationEighthScreen = () => {
  return (
    <>

<div className="mainContainerWeb">
     
       
     <form className="containerCard">
            <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <input type='text' placeholder='Email'/>
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <input type='text' placeholder='Personal Phone'/>
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <input type='text' placeholder='Parent contact'/>
                                     <div className="required">Required</div>

                                 </div>

          </div>
          <div className='spinnerMiniContainer'>
                                    <div className="divSpinner">
                                   

                                     <input type='text' placeholder='Any social link'/>
                                     <div className="required">Required</div>

                                 </div>

          </div>
          </form>
          </div>

          <Link to='/RegisterationNinthScreen'><button>Move next screen</button></Link>

    </>
  )
}

export default RegisterationEighthScreen