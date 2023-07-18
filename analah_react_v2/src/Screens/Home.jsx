import React from 'react'
import { Header } from '../Components/Header'
import "../App.css";
import "../Styles/home.css"
import Insurance from '../Components/Insurance';
import { OrbitingIcons } from '../Components/OrbitingIcons';
export  const Home = () => {

  const insurance_data = [
    {
      id: 1,
      name: "Term-Life Insurance",
      img: "Term_ins.png",
    },
    {
      id: 2,
      name: "Health Insurance",
      img: "Health_ins.png",
    },
    {
      id: 3,
      name: "Family Health Insurance",
      img: "Family_ins.png",
    },
    {
      id: 4,
      name: "Group Health Insurance",
      img: "Group_ins.png",
    },
    {
      id: 5,
      name: "Car Insurance",
      img: "Car_ins.png",
    },
    {
      id: 6,
      name: "2-Wheeler Insurance",
      img: "Two_ins.png",
    },
  
    {
      id: 7,
      name: "Travel Insurance",
      img: "Travel_ins.png",
    },
    {
      id: 8,
      name: "Home Insurance",
      img: "Home_ins.png",
    },
    {
      id: 9,
      name: "Retirement Plans",
      img: "ins9.png",
    },
    {
      id: 10,
      name: "Investment Plans",
      img: "ins10.png",
    },
    {
      id: 11,
      name: "Guaranteed Return Plans",
      img: "ins11.png",
    },
  ];


  return (
    <div >
      <Header />

      <div className="main-hero" style={{border: "1px solid red"}}>
        <div className="sm:pt-10  pt-[-20] relative homeLeft lg:pl-[6.5%] pl-[8.5%] sm:mt-[70%] mt-[80%] md:mt-[0%]" >
          <div className="py-0 px-5 sm:mt-[0px] mt-[-25px]" >
            <h1 className="text-[25px] sm:text-[30px] md:text-[40px] leading-[40px]  md:leading-[50px] lg:leading-[55px] font-normal font-500 text-[#FFFFFF]">
              Get the Best&nbsp;
              <span className="text-[#FFFFFF] font-500">Insurance</span>
              <br /> for your needs.
            </h1>
            <h4 className="text-[16px] font-[300] lg:text-[16px] pt-2 pb-7 text-[#FFFFFF] ">
              Let us help you choose a suitable plan.
            </h4>
          
            <div className="cstm-grid gap-4 w-[90%]"  >
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
      <div className="hero absolute right-[0px] block sm:mt-[20px]  lg:mt-[100px] " >
      
        <div className="">
          {/* <OrbitingIcons /> */}
        </div>
   
            </div>
       
        



    </div>
  )
}