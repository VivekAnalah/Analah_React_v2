import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../App.css";
import "../Styles/header.css"
export const Header = () => {

    const location= useLocation()
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [policyDetails, setPolicyDetails] = useState(false);


    const divStyles = {
        boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 20%)",
      
        marginRight: "0",
      };

      const textStyles = "text-[14px]  font-[400] hover:text-[#4C8CE7] text-[#808080]"


  return (
    <>
      <nav
        style={divStyles}
        id={"scroll"}
        className=" flex flex-wrap items-center justify-between py-3 bg-white sticky  top-[0px] z-[12] "
      >
        <div className="w-[100%] mycontainer mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <Link to="/" >
              {" "}
              <img
                src={require("../Assets/Images/logo.png")}
                alt="analah insurance"
                className={
                 
                     "sm:object-contain sm:w-[185px] sm:pt-0  sm:ml-[30px] ml-[-20px] mt-[0px]  w-[230px]  justify-start"
                }
              />
            </Link>
            <div></div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img
                src={require("../Assets/Images/bar-icon.png")}
                alt="hamburger-icon"
                className="object-contain w-[25px] h-[25px]"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <h2
                    className={`${location.pathname === "/" && "active"} ${textStyles} `
                    }
                  >
                    Insurance Products
                  </h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/raiseaclaim">
                  <h2
                    className={`${textStyles} ${location.pathname === "/raiseaclaim" && "active"}`
                    }
                  >
                    Raise a Claim
                  </h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/become-posp">
                  {" "}
                  <h2
                    className={`${textStyles} ${location.pathname === "/become-posp" && "active"}`
                    }
                  >
                    Become a PoSP with us
                  </h2>
                </Link>
              </li>
              <li className="nav-item w-[120px]">
               
                  <div
                    className={ "mt-[4px] flex gap-[5px] "}
                  >
                
                    <button
                      className={
                         "text-[#4c8ce7] text-[14px] font-600"
                      }
                    >
                       <a href="https://dashboard.analahinsurance.com/customer/login" target="blank">Login</a>
                      
                    </button>
                   
                   
                    <button className='w-[60%]' style={{borderRadius: "12.482px",background: "#4C8CE7"}}>
                      <Link to="" className='text-[#FFF] text-[14px] font-600   '>Register</Link>
                      
                    </button>
                  </div>
              
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}
