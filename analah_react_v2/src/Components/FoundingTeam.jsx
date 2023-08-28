import React, { useState } from "react";
import "../Styles/foundingTeam.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/custom-carousel.css";

export const FoundingTeam = () => {

  const [read, setRead] = useState(false); 
  const [read_v, setRead_V] = useState(false); 
  const bg = {
    background: "linear-gradient(180deg, #F5F5F5 0%, #F6FAFE 100%)",
  };

  return (
    <div className="w-[100%] lg:pt-[80px] md:pt-[60px] pt-[40px] pb-[100px] bg-[#F2F9FF]">
      <div class="topic pb-[5px] ">
        <span className="title-border-bottom">  Founding </span> <sapn class="topic2">Team</sapn>
      
      </div>

      <div
        className={`FoundingTeamGrid 2xl:w-[60%] lg:w-[70%] w-[75%] m-[auto] ${bg} grid grid-cols-[28%,65%]  gap-[3%] mt-[50px] foundingBg  relative h-[auto] `}
      >
        <div className="flex">
          <img
            src={require("../Assets/Images/Vaishali_Dhankani2.png")}
            alt="Vaishali Dhankani"
            className="foundingImagesWidth mb-[0px]"
          />
        </div>
        <div className="mt-[20px] ContentContainer " >
          
            <div>
              <p className="textStyleFounding">
                Vaishali holds over two decades of expertise in the Finance,
                Banking and Insurance sector.
              </p>
              <p className="textStyleFounding mt-[15px]">
                She is the CEO of Analah Insurance and the founder of the Analah
                Group and oversees investment transactions worth more than USD
                900 million.
              </p>
            </div>
{/* ----------- Read More Section --------- */}
<div  className={` ${read_v ? ` hidden` : `read_more mt-[15px] flex justify-end `} `} onClick={() => setRead_V(true)}>
       <span className=" hover:cursor-pointer hover:text-[#595959] textStyleFounding_read border-b-[2px]">
        Read More 
       </span>

        </div>

{/* ---------------------  Hidden Text -------------------- */}
            <div className={` ${read_v ? `founding_hidden block` : `hidden`} `}>
              <p className="textStyleFounding mt-[15px]">
                She leads investments for the group's Financial Services and
                Insurance sectors.
              </p>
              <p className="textStyleFounding mt-[15px]">
                She has been majorly focusing on Pre-IPO, venture capital and
                early-stage investments.
              </p>
              <p className="textStyleFounding mt-[15px]">
                Her recommendations have generated multi-bagger returns for
                onshore and offshore investors.
              </p>
              <p className="textStyleFounding mt-[15px]">
                Her foresight and stock picking abilities in private markets has
                helped investors and institutions diversify their portfolio, in
                turn generating high returns.
              </p>

              <p className="textStyleFounding mt-[15px]">
                Vaishali is a Chartered Accountant by profession, along with a
                Diploma in Systems Management (DNIIT).
              </p>
              <p className="textStyleFounding mt-[15px]">
                She has also held various senior positions in leading
                organizations such as ICICI Bank and National Payments
                Corporation of India (set up by the Reserve Bank of India &
                Indian Banking Association).
              </p>
            </div>

  {/* ----------- Less Section --------- */}
  <div className={` ${read_v ? ` less mt-[15px] flex justify-end` : `hidden`} `} onClick={() => setRead_V(false)}>
       <span className="hover:cursor-pointer  hover:text-[#595959] textStyleFounding_read border-b-[2px] ">
        Less 
       </span>

        </div>
         

          <div className="flex gap-[20px] mt-[15px] pb-[15px] ">
            <h3 className="name">Vaishali Dhankani</h3>

            <p className="text-[16px] text-[#4481E4] font-400 md:text-[14px] mt-[4px] designation">
              CEO
            </p>
          </div>
        </div>

        {/* Comma Image */}


        <div className="absolute top-[3%] 2xl:left-[25%] lg:left-[24%] md:left-[23%]  CommaImage">
          <img src={require("../Assets/Images/Comma.png")} alt="Comma" className="2xl:w-[15%] xl:w-[14%]  lg:w-[13%] w-[12%]" />
        </div>
      </div>

      {/* ----------- Hitesh Dhankani (Co-Founder) --------------*/}

      <div
        className={`FoundingTeamGrid 2xl:w-[60%] lg:w-[70%] w-[75%]  m-[auto] ${bg} grid grid-cols-[28%,65%]  gap-[3%] mt-[50px] foundingBg  relative h-[auto] `}
      >
          <div className="flex">
          <img
            src={require("../Assets/Images/hitesh_dhankani4.png")}
            alt="Hitesh Dhankani"
            className=" foundingImagesWidth2 mb-[0px]"
          />
        </div>


        <div className="mt-[20px] ContentContainer2 ">
         
            <div>
              <p className="textStyleFounding">
                Hitesh is reckoned as a reputable, thoughtful & an action
                oriented leader with proven success in Asset Management,
                Fundraising, Distribution, Sales, Marketing, Research and
                Advisory across Financial Services, Insurance, Real Estate and
                Technology.
              </p>

              <p className="textStyleFounding mt-[15px]">
                He is the Co-founder of the Analah group, wherein, he is
                responsible for performance, strategy & growth of the company.
              </p>
             
            </div>

{/* ----------- Read More Section --------- */}
        <div  className={` ${read ? ` hidden` : `read_more mt-[15px] flex justify-end `} `} onClick={() => setRead(true)}>
       <span className=" hover:cursor-pointer hover:text-[#595959] textStyleFounding_read border-b-[2px]">
        Read More 
       </span>

        </div>

        {/* ---------------------  Hidden Text -------------------- */}
            <div className={` ${read ? `founding_hidden block` : `hidden`} `} >
             
              <p className="textStyleFounding mt-[15px]">
                Hitesh has done his Software Engineering in Systems Management
                (GNIIT) and B.com (Hons).
              </p>
              <p className="textStyleFounding mt-[15px]">
                He also holds a Masters in Business, SMP from the Indian
                Institute of Management (IIM) - Calcutta.
              </p>
              <p className="textStyleFounding mt-[15px]">
                His leadership competence also dives across the Equity sector
                among leading Asset Management Companies, NBFC’s, and Banks.
              </p>

              <p className="textStyleFounding mt-[15px]">
                He possesses a proven entrepreneurial prowess having been a key
                member of core startup teams responsible for the successful
                launch of top notch organizations like HDFC Bank, SBI Asset
                Management, Mirae Asset and Prudential Incorporation (Pramerica
                AMC).
              </p>

            </div>
           
           {/* ----------- Less Section --------- */}
        <div className={` ${read ? ` less mt-[15px] flex justify-end` : `hidden`} `} onClick={() => setRead(false)}>
       <span className="hover:cursor-pointer  hover:text-[#595959] textStyleFounding_read border-b-[2px] ">
        Less 
       </span>

        </div>
         

          <div className="flex gap-[20px] mt-[15px] pb-[15px]">
            <h3 className="name">Hitesh Dhankani</h3>

            <p className="text-[16px] text-[#4481E4] font-400 md:text-[14px] mt-[4px] designation">
              Co-Founder
            </p>
          </div>
        </div>

      

        {/* Comma Image */}

        <div className="absolute top-[3%] 2xl:left-[25%] lg:left-[24%] md:left-[23%]  CommaImage">
          <img src={require("../Assets/Images/Comma.png")} alt="Comma" className="2xl:w-[15%] xl:w-[14%]  lg:w-[13%] w-[12%]" />
        </div>
      </div>
    </div>
  );
};
