import React from 'react'
import "../Styles/home.css";
import Insurance from '../Components/Insurance';
import { OrbitingIcons } from '../Components/OrbitingIcons';
export const HomeTopSection = () => {


    const insurance_data = [
        {
          id: 1,
          name: "Term-Life Insurance",
          img: "Term_ins_logo.png",
        },
        {
          id: 2,
          name: "Health Insurance",
          img: "Health_ins_logo.png",
        },
        {
          id: 3,
          name: "Family Health Insurance",
          img: "Family_ins_logo.png",
        },
        {
          id: 4,
          name: "Group Health Insurance",
          img: "Group_ins_logo.png",
        },
        {
          id: 5,
          name: "Car Insurance",
          img: "Car_ins_logo.png",
        },
        {
          id: 6,
          name: "2-Wheeler Insurance",
          img: "Bike_ins_logo.png",
        },
      
        {
          id: 7,
          name: "Travel Insurance",
          img: "Travel_ins_logo.png",
        },
        {
          id: 8,
          name: "Home Insurance",
          img: "Home_ins_logo.png",
        },
        {
          id: 9,
          name: "Retirement Plans",
          img: "Retirement_ins_logo.png",
        },
        {
          id: 10,
          name: "Investment Plans",
          img: "Investment_ins_logo.png",
        },
        {
          id: 11,
          name: "Guaranteed Return Plans",
          img: "Guaranteed_ins.png",
        },
      ];
    

  return (
    <div style={{ height: "auto"}}>
 <div className="main-hero pt-[50px]" >
        <div className=" homeLeft lg:pl-[6.5%] pl-[8.5%]" >
          <div className="py-0 px-5]" >
            <h1 className="text-[25px] sm:text-[30px] md:text-[40px] leading-[40px]  md:leading-[50px] lg:leading-[55px] font-normal font-500 text-[#FFFFFF]">
              Get the Best&nbsp;
              <span className="text-[#FFFFFF] font-500">Insurance</span>
              <br /> for your needs.
            </h1>
            <h4 className="text-[16px] font-[300] lg:text-[16px] pt-2 pb-7 text-[#FFFFFF] ">
              Let us help you choose a suitable plan.
            </h4>
          
            <div className="cstm-grid gap-4 w-[90%] mb-[53px]"  
            
            >
              {insurance_data.map((item,index) => {
                return (
                  <div
                  key={index}
                    className="bg-[#FFFFFF] text-center rounded-[20px] hover:scale-110"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      
                    }}
                  >
                    <Insurance ins={item.name} item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[120px] lg:right-[20%] md:right-[10%] block   mt-[100px] " >
      
        <div className="">
          <OrbitingIcons />
        </div>
   
            </div>
        
    </div>
  )
}
