import React from 'react'
import { Header } from '../Components/Header'
import "../App.css";
import "../Styles/home.css"
import { HomeTopSection } from '../Components/HomeTopSection';
import { Choose } from '../Components/Choose';
import OurPartner from '../Components/OurPartner';
import { About } from '../Components/About';
import { Value } from '../Components/Value';
import { FoundingTeam } from '../Components/FoundingTeam';

export  const Home = () => {

 

  return (
    <div className=''>
      <Header />


    
    <HomeTopSection /> 
     
     

     <Choose />   

     <div >
     <div className="relative">
          <img
            alt="Right triangle"
            src={require("../Assets/Images/rightTriangle.png")}
            className="object-contain aspect-auto h-auto absolute right-0 sm:w-[100px] w-[70px] sm:top-[-3.5%] top-[-1%] "
          />
         
            <OurPartner />

            
        
        </div>
     </div>
     <About />

     <Value />

     <FoundingTeam />
    



       
      </div>
  )
}
