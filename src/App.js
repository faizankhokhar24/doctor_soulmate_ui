
import './App.css';

import Registeration from './Components/RegisterationComponents/Registeration';
import './Components/CSSFiles/Registeration.css'
import RegisterationSecondS from './Components/RegisterationComponents/RegisterationSecondS';
import './Components/CSSFiles/RegisterationSecondS.css'
import RegisterationThirdS from './Components/RegisterationComponents/RegisterationThirdS';
import RegisterationFourthSc from './Components/RegisterationComponents/RegisterationFourthSc'
import RegisterationFifthScreen from './Components/RegisterationComponents/RegisterationFifthScreen'
import RegisterationSixthScreen from './Components/RegisterationComponents/RegiseterationSixthScreen'
import RegisterationEightScreen from './Components/RegisterationComponents/RegisterationEighthScreen'


import './Components/CSSFiles/RegisterationThirdS.css'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import RegisterationFourthS from './Components/RegisterationComponents/RegisterationFourthS';
import RegisterationSeventhScreen from './Components/RegisterationComponents/RegisterationSeventhScreen';
import RegisterationNinthScreen from './Components/RegisterationComponents/RegisterationNinthScreen';
import UserHomePage from './Components/UserHomePage/UserHomePage';

function App() {

 const[dataFromGoogle,setDataFromGoogle]=useState('');
 const[dataFromGoogle1,setDataFromGoogle1]=useState('');

 
 


 const[gender,setGender]=useState("");

//  console.log(gender);
 
  return (

    <div className="App">



    <Routes>
      <Route path="/" element={<Registeration setDataFromGoogle={setDataFromGoogle} setDataFromGoogle1={setDataFromGoogle1}/>} />
   
   
      <Route path="/registerationSecondS" element={<RegisterationSecondS  setGender={setGender}/>} />
      {/* <Route path="/RegisterationThirdS" element={<RegisterationThirdS firstName={dataFromGoogle} lastName={dataFromGoogle1} gender={gender} />} /> */}
      <Route   path="/RegisterationFourthS" element={<RegisterationFourthS firstName={dataFromGoogle} lastName={dataFromGoogle1}/>} />
      <Route   path="/RegisterationFourthSc" element={<RegisterationFourthSc/>} />
      <Route   path="/RegisterationFifthScreen" element={<RegisterationFifthScreen/>} />
      <Route   path="/RegisterationSixthScreen" element={<RegisterationSixthScreen/>} />
      <Route   path="/RegisterationSeventhScreen" element={<RegisterationSeventhScreen/>} />
      <Route   path="/RegisterationEigthScreen" element={<RegisterationEightScreen/>} />
      <Route   path="/RegisterationNinthScreen" element={<RegisterationNinthScreen/>} />
      <Route path='/UserHomePage' element={<UserHomePage/>}/>
      



    
     
     
    </Routes>

    </div>
      

     
      
   
  )
}

export default App;
