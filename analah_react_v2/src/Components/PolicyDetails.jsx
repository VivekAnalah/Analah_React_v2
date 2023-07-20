import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import {Header} from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/policyDetails.css";

function PolicyDetails({
  head,
  benefit_head,
  key_feature_head,
  subhead,
  list1,
  list2,
  list3,
  list4,
  img,
  Ins_Text_1,
  Ins_Text_2,
  Ins_Text_3,
  description_1,
  description_2,
  description_3,
  benefits,
  keyTerms,
  twoWheel,
  homeInsurance,
  RetirementInsurance,
  car,
  why,
  whyText,
  quotes,
  quotes_link,
  helping_verb,
  no_benefit,
  isRequired,
  whyRequired_head,
  whyRequired_Text,
  what,
  whatText,
  whatHeadingText,
  whatDefinition,
  gridText,
  gridHeader,
  document_data,
  add_ons_array,
  extra_data,
  gridTopRight,
  gridTopLeft,
  button_overlap
}) {
  const matches = useMediaQuery("(max-width:500px)");

  const title = head;
  const myArr = title.split(" ");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const divStyles = {
   
    
    background: isHovered
      ? "white"
      : "linear-gradient(176deg, #4582E4 0%, #4582E4 100%)",
    boxShadow: isHovered ? "5px 10px" : "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    color: isHovered ? "#4582E4" : "#ffffff",
    borderRadius: 11,
    width : "177px",
    height : "35px",
    // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    


  };

  return (
    <div>
      <Header policyDetails={false} />

      <div
        id="insurance-scroll"
        className=" mx-auto  pb-[30px]   "
        style={{
          background: "linear-gradient(5deg, rgb(188 207 227) 0%, rgba(255, 255, 255, 0.06) 59.90%)"
         
        }}
      >
        <div className="flex flex-col sm:flex-row   termLife items-center pt-[50px] pb-[20px] w-[90%] m-auto" >
          <div className="lg:w-[45%] sm:w-[50%] w-[90%] order-2 sm:order-1 flex flex-col  pl-[8.5%] sm:pr-[0%] pr-[8.5%]">
            <div className=" ">
              <div className="flex items-center sm:mt-[0px] mt-[20px]">

{/* Done */}
                <h2 className="policyHeader pb-[2%]">
                  <span className="title-border-bottom">{myArr[0]}</span>{" "}
                  {myArr[1] === "Insurance" || myArr[1] === "Plans" ? (
                    <span className="policyHeader2">
                      {myArr[1]}
                    </span>
                  ) : (
                    <span>{myArr[1]} </span>
                  )}
                  <span className="policyHeader2">{myArr[2]}</span>
                </h2>
                {/* ---- */}
              </div>
              {/* done */}
              <h3 className="  text-[16px] font-[400] lg:pt-[25px] pt-[1rem] text-[#000] pb-[2%]">
                {subhead}
              </h3>

                <div className="listBox" >
              <ul className="  text-[16px] font-400 ">
                <li className="p-[7px] flex" >
                  <img src={require("../Assets/Images/point.png")} alt="" className="bulletImage" />
                <p className="text-[#494949]   absolute left-[13%] top-[15px]">{list1}</p>
                </li>
                </ul>
                </div>

                <div className="listBox mt-[12px]" >
              <ul className="  text-[16px]  text-[#217BF4] font-400 ml-[25px]  ">
                <li className="p-[7px] " >
                <img src={require("../Assets/Images/point.png")} alt="" className="bulletImage" />
                <p className="text-[#494949] absolute left-[13%] top-[15px]">{list2}</p>
                </li>
                </ul>
                </div>

                <div className="listBox mt-[12px]" >
              <ul className="  text-[16px]  text-[#217BF4] font-400 ml-[25px]  ">
                <li className="p-[7px] " >
                <img src={require("../Assets/Images/point.png")} alt="" className="bulletImage" />
                <p className="text-[#494949] absolute left-[13%] top-[15px]">{list3}</p>
                  </li>
                </ul>
                </div>

                <div className="listBox mt-[12px]" >
              <ul className="  text-[16px]  text-[#217BF4] font-400 ml-[25px]">
                <li className="p-[7px] " >
                <img src={require("../Assets/Images/point.png")} alt="" className="bulletImage" />
                  <p className="text-[#494949] absolute left-[13%] top-[15px]">{list4}</p>
                  </li>
                </ul>
                </div>

              
            </div>
          </div>
          {/* -------- */}

{/* Top Vector Section */}
          <div className="order-1 sm:order-2  items-center xl:ml-[10%] lg:ml-[5%]" >


<div className="relative">
  <div className="w-[50px] h-[50px] bg-[#F2F2F2] absolute top-[-14px] left-[-18px]"></div>
{img === "Travel_ins" ? (
              <img
                src={require(`../Assets/Images/${img}.png`)}
                alt={head}
                className=" w-[377.073px] height-[251.382px] z-[2]"
              />
            ) : img === "Group_ins" ? <> <img
            src={require(`../Assets/Images/${img}.png`)}
            alt={head}
            className=" w-[377.073px] height-[251.382px] z-2"
          />  </> : (
              <img
                src={require(`../Assets/Images/${img}.png`)}
                alt={head}
                className=" w-[300.073px] height-[225.382px] z-2 relative top-0"
              />
            )}
</div>

          

<div className="">
        <div
          className="mt-[20px]"
          style={{ textAlign: "center" }}
        >
           {myArr[0] === "Term"  ? (
            <h2 className=" text-[24px] items-center">
              <span className="text-[#4C8CE7] font-600">{Ins_Text_1}</span>{" "}
              <span className="text-[#000] font-400">{Ins_Text_2}</span>{" "}
              <span className="text-[#000] ">{Ins_Text_3}</span>
            </h2>
          ) : (
            <h2 className=" text-center">
              <span className="text-[#4C8CE7] font-600">{Ins_Text_1}</span>{" "}
              <span className="text-[#000] font-400">{Ins_Text_2}</span>{" "}
              <span className="text-[#4C8CE7] ">{Ins_Text_3}</span>
            </h2>
          )}
        </div>

        <div
          className="headingLine m-[auto] w-[100%]"
          style={{
            background:
              "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
          }}
        >
      
        </div>
      </div>

<div className=" justify-center items-center ">
        {button_overlap ? <><div className="button_overlap text-center items-center h-[37px] w-[177px]  mt-[15px]">
          <a href={quotes_link} target="blank">
            <button
              className="justify-center items-center py-2 text-[#FFFFFF] px-10 sm:text-[18px] text-[15px]"
              style={divStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
            >
              {quotes}
            </button>
          </a>
        </div></>: <><div className="text-center items-center h-[20px] mt-[20px]">
          <a href={quotes_link} target="blank">
            <button
              className="justify-center items-center font-700 text-[#FFFFFF] sm:text-[16px] text-[15px]"
              style={divStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
            >
              {quotes}
            </button>
          </a>
        </div></>}
        
        
      </div>


     
          </div>
        </div>
      </div>
     {/* -------------------- */}
     

      <div className="my-0 ">
       

        <div className="relative ">
          <img
            alt="left triangle"
            style={{ display: matches ? "none" : "" }}
            src={require("../Assets/Images/rightTriangle.png")}
            className="object-contain aspect-auto sm:w-[100px] w-[0px] absolute sm:top-[1%] top-[2.5%]  h-auto rotate-180"
          />
          <div className={ gridText ? " pt-10 ml-[8.5%] mr-[8.5%] mx-auto pb-20" : " pt-10 ml-[8.5%] mr-[8.5%] mx-auto pb-10 lg:pb-20"}>
            <div>
              <h2 className=" pb-8 lg:pb-11 text-center font-1000 text-[32px] text-[#000]">
              Know more about 
              {" "}<span className="text-[#4C8CE7]">
               {head}
              </span>
              </h2>
            </div>

{/* Flex Table of Conent  */}

<div className="flex w-[90%] ml-[50px] gap-[5%]">

  <div className="w-[15%] h-[200px] ml-[5%] rounded-[19px] bg-[#eceff3] ">

    <div>

    </div>

    <div></div>

    <div></div>

  </div>

  <div className="w-[70%]">
  <div>
              {RetirementInsurance ? (
                <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                  Retirement or Pension Plans
                </h2>
              ) : (
                <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                  {head}
                </h2>
              )}

              <p className="text_font text-justify font-400 pb-[40px] lg:pb-[40px]">
                {description_1}

                {description_2 ? (
                  <>
                    {" "}
                    <br />
                    <br />
                    {description_2}
                  </>
                ) : (
                  <></>
                )}

                {description_3 ? (
                  <>
                    <br />
                    <br />
                    {description_3}{" "}
                  </>
                ) : (
                  <></>
                )}
              </p>
              {why ? (
                <>
                  <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                    Why {helping_verb} {head} essential?
                  </h2>{" "}
                  <ul className="list-disc ml-4 mb-10">
                    {whyText.map((item, index) => {
                      return (
                        <li
                          className="text_font font-[400] text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                  </ul>{" "}
                </>
              ) : (
                ""
              )}
              {what ? (
                <>
                  <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                    What is Travel Insurance?
                  </h2>{" "}
                  <p className="text_font text-justify">
                    {whatDefinition}
                  </p>
                  <p className="text-[#595959] font-[600] text-base lg:text-lg text-justify mb-4 mt-4 lg:mb-6">
                    Types of Travel Insurance in India
                  </p>
                  <ul className="list-disc ml-4 mb-10">
                    {whatText &&
                      whatText.map((item, index) => {
                        return (
                          <li
                            className="text_font text-justify mb-4 lg:mb-6"
                            key={index}
                          >
                            <span className="font-[600]">{item.desc_head}</span>{" "}
                            {item.desc}
                          </li>
                        );
                      })}
                  </ul>{" "}
                </>
              ) : (
                ""
              )}
              {no_benefit ? (
                ""
              ) : (
                <>
                  <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                    {benefit_head}
                  </h2>
                  <ul className="list-disc ml-4 mb-10">
                    {benefits.map((item, index) => {
                      return (
                        <li
                          className="text_font text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                  </ul>{" "}
                </>
              )}
              {twoWheel ? (
                <>
                  <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                    {benefit_head}
                  </h2>
                  <p className="text_font text-justify mb-4 lg:mb-6">
                    Bike insurance in India offers several benefits to
                    policyholders. Some of the key advantages include:
                  </p>
                  <ul className="list-disc ml-4 mb-10">
                    {benefits.map((item, index) => {
                      return (
                        <li
                          className="text_font text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                  </ul>{" "}
                  <p className="text_font text-justify mb-4 lg:mb-6 font-[600]">
                    It is important to carefully assess the coverage, terms, and
                    conditions offered by different insurance providers and
                    choose a policy that best suits your requirements and
                    budget.
                  </p>
                </>
              ) : (
                <></>
              )}

             
              {twoWheel ? (
                <>
                  <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                    How to choose a Two-wheeler Insurance Policy?
                  </h2>
                  <p className="text_font text-justify mb-4 lg:mb-6">
                    Once you understand the significance of having a bike
                    insurance policy, the subsequent step is to familiarize
                    yourself with the types of bike insurance policies
                    available. In the market, there are two categories of bike
                    insurance policies. The first is a third-party bike
                    insurance, which is a fundamental policy providing coverage
                    for damages caused to a third party due to your bike. On the
                    other hand, a comprehensive bike insurance plan offers
                    coverage for both you and the third party involved.
                  </p>
                  <p className="text_font text-justify mb-4 lg:mb-6">
                    Nevertheless, similar to any other purchase, it is crucial
                    to conduct thorough research and compare your needs with
                    affordability before buying a bike insurance policy. Here
                    are some valuable tips that can assist you in selecting the
                    best bike insurance plan:
                  </p>
                </>
              ) : homeInsurance ? (
                <></>
              ) : (
                <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                  {key_feature_head}
                </h2>
              )}
              {homeInsurance ? (
                <></>
              ) : (
                <ul className="list-disc ml-4 pb-[32px]">
                  {keyTerms.map((item, index) => {
                    return (
                      <li
                        className="text_font text-justify mb-4 lg:mb-6"
                        key={index}
                      >
                        {car && item.id == 3 ? (
                          <>
                            <p>
                              <span className="font-[600]">Premiums:</span> The
                              premiums for Car Insurance are decided on the
                              basis of:
                            </p>
                            <li
                              className={
                                matches
                                  ? "text_font text-justify my-1 ml-[6%]"
                                  : "text_font text-justify my-3 ml-[5%]"
                              }
                            >
                              The type of Vehicle, Model Number, Fuel Type,
                              Capacity etc
                            </li>
                            <li
                              className={
                                matches
                                  ? "text_font text-justify my-1 ml-[6%]"
                                  : "text_font text-justify my-3 ml-[5%]"
                              }
                            >
                              The city
                            </li>
                            <li
                              className={
                                matches
                                  ? "text_font text-justify my-1 ml-[6%]"
                                  : "text_font text-justify my-3 ml-[5%]"
                              }
                            >
                              Age and profession
                            </li>
                            <li
                              className={
                                matches
                                  ? "text_font text-justify my-1 ml-[6%]"
                                  : "text_font text-justify my-3 ml-[5%]"
                              }
                            >
                              Accessories added or any modifications made in the
                              policy
                            </li>

                            <p
                              className={
                                matches
                                  ? " text_font text-justify my-1 font-[600]"
                                  : "text_font text-justify my-3 font-[600]"
                              }
                            >
                              These are the factors that determine Car Insurance
                              quotes that are required to pay to buy the policy.
                              Use Car Insurance online calculators to find the
                              premium payable on a policy.
                            </p>
                          </>
                        ) : (
                          <>
                            {" "}
                            <span className="font-[600]">
                              {item.desc_head}
                            </span>{" "}
                            {item.desc}
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* What is covered Travel Insurance section */}

            {gridHeader ? (
              <>
                <div className="w-[100%] mb-[15px]">
                  <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                    {gridHeader}
                  </h2>

                  <div className="flex gap-[5px] mt-[5px]">
                    <div className="w-[30%]   font-[600] text_font bg-[#FFFFFF] p-[2%] flex  items-center">
                      {gridTopLeft}
                    </div>
                    <div className=" p-[2%] w-[70%] text-justify text_font  bg-[#FFFFFF] font-[600]">
                      {gridTopRight}
                    </div>
                  </div>
                  {gridText &&
                    gridText.map((text, index) => (
                      <div className="flex gap-[5px] mt-[5px]" key={index}>
                        <div className="w-[30%]  font-[600] text_font  bg-[#FFFFFF] p-[2%] flex  items-center">
                          {text.title}
                        </div>
                        <div className="text_font p-[2%] w-[70%] text-justify  bg-[#FFFFFF]">
                          {text.desc}
                        </div>
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <></>
            )}
            {/* Why required section for Car  */}
            {isRequired ? (
              <>
                <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                  {whyRequired_head}
                </h2>
                <ul className="list-disc ml-4 mb-10">
                  {whyRequired_Text &&
                    whyRequired_Text.map((item, index) => {
                      return (
                        <li
                          className="text_font text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">
                            {item.require_head}
                          </span>{" "}
                          {item.require}
                        </li>
                      );
                    })}
                </ul>{" "}
              </>
            ) : (
              ""
            )}

            {/* Add-ons In car  */}
            {extra_data ? (
              <div>
                <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
                  Add-ons in a Car Insurance Policy
                </p>
                <p className="text_font ml-[16px] text-justify mb-4 lg:mb-6">
                  In addition to the standard Car Insurance coverage, Insurance
                  companies also offer ‘Add-on Covers’, which are additional
                  covers that protect your car and offer extra coverage. By
                  paying an additional premium, which is added to the Car
                  Insurance quotes to determine the final premium payable for
                  the policy, Add-on Covers can be purchased. Comprehensive Car
                  Insurance packages provide Add-ons. Below are some examples of
                  frequent Add-ons:
                </p>
                <ul className="list-disc ml-4 mb-10">
                  {add_ons_array &&
                    add_ons_array.map((item, index) => {
                      return (
                        <li
                          className="text_font text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">
                            {item.require_head}
                          </span>{" "}
                          {item.require}
                        </li>
                      );
                    })}
                </ul>{" "}
                <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
                  Documents required to Raise Car Insurance Claim:
                </p>
                <p className="text_font ml-[16px] text-justify mb-4 lg:mb-6">
                  There is no actual paperwork required to raise a claim against
                  your policy. The following documents must instead be uploaded
                  digitally via our digital platform (mobile website/app).
                  Please note that depending on the claim, the list of required
                  documents may change.
                </p>
                <ul className="list-disc ml-4 mb-10">
                  {document_data && document_data.map((item, index) => {
                    return (
                      <li
                        className="text_font text-justify  ml-[5%]"
                        key={index}
                      >
                        {item.require}
                      </li>
                    );
                  })}
                </ul>{" "}
              </div>
            ) : (
              <></>
            )}
  </div>


</div>


           
          </div>
          <img
            alt="left triangle"
            style={{ display: matches ? "none" : "" }}
            src={require("../Assets/Images/rightTriangle.png")}
            className="object-contain aspect-auto sm:w-[100px] w-[0px] absolute  bottom-[0%] right-[0%]  h-auto  sm:block hidden"
          />
        </div>
      </div>
      <div className="mt-[20px]">
        <Footer />
      </div>
     
      
    </div>
  );
}

export default PolicyDetails;

