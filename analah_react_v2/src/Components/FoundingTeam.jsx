import React from "react";
import "../Styles/foundingTeam.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/custom-carousel.css";

export const FoundingTeam = () => {
  const bg = {
    background: "linear-gradient(180deg, #F5F5F5 0%, #F6FAFE 100%)",
  };

  return (
    <div className="w-[100%] pt-[80px] pb-[100px] bg-[#F2F9FF]">
      <div class="topic pb-[5px]">
        Founding <sapn class="topic2">Team</sapn>
      </div>

      <div
        className={`FoundingTeamGrid 2xl:w-[40%] lg:w-[60%] w-[75%] m-[auto] ${bg} grid grid-cols-[32%,65%]  gap-[3%] mt-[50px] foundingBg  relative h-[auto] `}
      >
        <div className="">
          <img
            src={require("../Assets/Images/Vaishali_Dhankani2.png")}
            alt="Vaishali Dhankani"
            className="   foundingImagesWidth mt-[-35px]"
          />
        </div>
        <div className="mt-[20px] ContentContainer mr-[5%]" >
          <Carousel
            className="carousel"
            infiniteLoop
            autoPlay
            interval={2000}
            stopOnHover={true}
            showArrows={false}
            showStatus={false}
          >
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

            <div>
              <p className="textStyleFounding">
                She leads investments for the group's Financial Services and
                Insurance sectors.
              </p>
              <p className="textStyleFounding mt-[15px]">
                She has been majorly focusing on Pre-IPO, venture capital and
                early-stage investments.
              </p>
            </div>

            <div>
              <p className="textStyleFounding">
                Her recommendations have generated multi-bagger returns for
                onshore and offshore investors.
              </p>
              <p className="textStyleFounding mt-[15px]">
                Her foresight and stock picking abilities in private markets has
                helped investors and institutions diversify their portfolio, in
                turn generating high returns.
              </p>
            </div>

            <div className="last_Carousel1">
              <p className="textStyleFounding">
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

            {/* <div className="last_Carousel2">
              <p className="textStyleFounding">
                Vaishali is a Chartered Accountant by profession, along with a
                Diploma in Systems Management (DNIIT).
              </p>
             
              
            </div>


            <div className="last_Carousel3">
             
              <p className="textStyleFounding">
                She has also held various senior positions in leading
                organizations such as ICICI Bank and National Payments
                Corporation of India (set up by the Reserve Bank of India &
                Indian Banking Association).
              </p>
              
            </div> */}


           

           
          </Carousel>
          <div className="flex gap-[20px] absolute bottom-[40px] NameDIv">
            <h3 className="name">Vaishali Dhankani</h3>

            <p className="text-[16px] text-[#4481E4] font-400 md:text-[14px] mt-[4px] designation">
              CEO
            </p>
          </div>
        </div>
      </div>

      <div
        className={`FoundingTeamGrid 2xl:w-[40%] lg:w-[60%] w-[75%]  m-[auto] ${bg} grid grid-cols-[65%, 32%]  gap-[3%] mt-[50px] foundingBg pl-[2%] relative h-[auto] `}
      >
        <div className="mt-[35px] ContentContainer2 ">
          <Carousel
            className="carousel"
            infiniteLoop
            autoPlay
            interval={2000}
            stopOnHover={true}
            showArrows={false}
            showStatus={false}
          >
            <div>
              <p className="textStyleFounding">
                Hitesh is reckoned as a reputable, thoughtful & an action
                oriented leader with proven success in Asset Management,
                Fundraising, Distribution, Sales, Marketing, Research and
                Advisory across Financial Services, Insurance, Real Estate and
                Technology.
              </p>
              <p className="textStyleFounding mt-[15px]"></p>
            </div>

            <div>
              <p className="textStyleFounding">
                He is the Co-founder of the Analah group, wherein, he is
                responsible for performance, strategy & growth of the company.
              </p>
              <p className="textStyleFounding mt-[15px]">
                Hitesh has done his Software Engineering in Systems Management
                (GNIIT) and B.com (Hons).
              </p>
            </div>
            <div>
              <p className="textStyleFounding">
                He also holds a Masters in Business, SMP from the Indian
                Institute of Management (IIM) - Calcutta.
              </p>
              <p className="textStyleFounding mt-[15px]">
                His leadership competence also dives across the Equity sector
                among leading Asset Management Companies, NBFC’s, and Banks.
              </p>
            </div>
            <div>
              <p className="textStyleFounding">
                He possesses a proven entrepreneurial prowess having been a key
                member of core startup teams responsible for the successful
                launch of top notch organizations like HDFC Bank, SBI Asset
                Management, Mirae Asset and Prudential Incorporation (Pramerica
                AMC).
              </p>
              <p className="textStyleFounding mt-[15px]"></p>
            </div>
          </Carousel>

          <div className="flex mt-[25px] gap-[20px] absolute bottom-[12px]">
            <h3 className="name">Hitesh Dhankani</h3>

            <p className="text-[16px] md:text-[14px] mt-[4px] designation">
              Co-Founder
            </p>
          </div>
        </div>

        <div>
          <img
            src={require("../Assets/Images/hitesh_dhankani4.png")}
            alt="Hitesh Dhankani"
            className="mt-[-35px] foundingImagesWidth2"
          />
        </div>
      </div>
    </div>
  );
};
