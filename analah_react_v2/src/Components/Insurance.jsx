
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/insurance.css"
import { useContext } from "react";
import { display } from "../Context/DisplayContext";

function Insurance({ item, ins, index}) {

  const {setInvestment, setGuaranteeModal} = useContext(display);
  let insuranceName = ins;
  const myArr = insuranceName.split(" ");
  console.log("insuranceName ", myArr[0]);
  
  return (
    <>
     {index === 9 ? 
      (
      <div
        className={
         "p-[5px] flex justify-center flex-col items-center topInsuraceDivs hover:cursor-pointer"
          }
          onClick={() => setInvestment()}
          
      >
         <img
        src={require(`../Assets/Insurance_Images/${item.img}`)}
        alt=""
        className={"object-contain  w-[35%] h-[40px] lg:h-[40px] 2xl:h-[60px] mt-[10px] insurance-home-img"}
      /> 
        

      <div className="contents">
        <h6 className="text-[85%]  pt-2  font-bold  lg:w-10/12 min-h-[39px] insurance-home-text">
       
          {item.name}
        </h6>
      </div>

      </div>
      )
      :  index === 10 ? (
      <div
        className={
         "p-[5px] flex justify-center flex-col items-center topInsuraceDivs hover:cursor-pointer"
          }
          onClick={() => setGuaranteeModal()}
      >
         <img
        src={require(`../Assets/Insurance_Images/${item.img}`)}
        alt=""
        className={"object-contain  w-[35%] h-[40px] lg:h-[40px] 2xl:h-[60px] mt-[10px] insurance-home-img"}
      /> 
        

      <div className="contents">
        <h6 className="text-[85%]  pt-2  font-bold  lg:w-10/12 min-h-[39px] insurance-home-text">
       
          {item.name}
        </h6>
      </div>

      </div>
    ) :   <Link to={`/${myArr[0]}`} >
      <div
        className={
         "p-[5px] flex justify-center flex-col items-center topInsuraceDivs"
          }
          
      >
         <img
        src={require(`../Assets/Insurance_Images/${item.img}`)}
        alt=""
        className={"object-contain  w-[35%] h-[40px] lg:h-[40px] 2xl:h-[60px] mt-[10px] insurance-home-img"}
      /> 
        

      <div className="contents">
        <h6 className="text-[85%]  pt-2  font-bold  lg:w-10/12 min-h-[39px] insurance-home-text">
       
          {item.name}
        </h6>
      </div>

      </div>
    </Link>}
  
    </>

   
  );
}

export default Insurance;
