import React, { useState } from 'react'
import "../Styles/value.css"

export const Value = () => {

    

     // -------- Title holder -----------
  const [title, setTitle] = useState("Entrepreneurship");
  //  -------- Value holder -----------
  const [value, setValue] = useState(
    "We strongly believe that each one in our team is an Entrepreneur. So whatever our role is, we are always on the lookout for new opportunities and initiatives that can take our business to new levels."
  );
  // --------- Image Holder ---------------
 
  // --------- All title and values ------------
  const ref_values = {
    ent_button: [
      "Entrepreneurship",
      "We strongly believe that each one in our team is an Entrepreneur. So whatever our role is, we are always on the lookout for new opportunities and initiatives that can take our business to new levels.",
    ],
    phil_button: [
      "Philanthropy",
      "For us Philanthropy means creating Financial Independence for our Clients and Partners.",
    ],
    innovation_button: [
      "Innovation",
      "We understand that change is the only constant, and to be successful, you’ve got to adapt to change. As a team we’re always learning and innovating ourselves and our business. We are always looking for the – Next Best Thing.",
    ],
    diversity_button: [
      "Diversity",
      "We know it takes people with different ideas, strengths, interests and cultural backgrounds to make our company succeed. Diversity makes us strong. We celebrate multiple approaches and point of views.",
    ],
    transparency_button: [
      "Transparency",
      "We operate with transparency by communicating internally and externally with unwavering candor, honesty and respect.",
    ],
    passion_button: [
      "Passion",
      "Our passion and love, towards the work we do makes us go the extra mile. We don’t stop until we get it right.",
    ],
    positivity_button: [
      "Positivity",
      "We believe that Positive attitude gives a long-lasting happiness and helps us bring energy and enthusiasm to our work.",
    ],
  };

    // -------- function for changing values on clicking relative Icon --------------
    const change_values = (e) => {
      
      setTitle(ref_values[e.target.name][0]);
      setValue(ref_values[e.target.name][1]);
    };

  return (
    <div>
         <div className="bg-[#FAFFFF]">
      <div className="flex md:space-y-5 flex-col justify-center items-center ">

      <div className='m-[auto] mt-[114px] '>
        <div class="topic "> <sapn class="topic2 title-border-bottom mb-[10px]">Values</sapn></div>
        <p className='textStyle w-[80%] m-[auto] mt-[20px]'>    At Analah Insurance, we believe our values shape and define the
          culture of our company. Our values serve the foundation on how we work
          and make our business decisions.</p>
        </div>
        
      

{/* ------- Value Image & Button Container -------------- */}
        <div className="flex justify-center items-center relative w-[120%] sm:w-[80%]"  >
          <img
            alt="values"
            src={require("../Assets/Images/values.png")}
            className="h-auto  lg:w-[70%]"
            
          />
          <button
            className=" bg-[transparent] absolute z-[10] lg:w-[9%] w-[13%] h-[23%] rounded-[50%] top-[66%]"
            name="ent_button"
            onClick={(e) => change_values(e)}
          ></button>
          <button
            className=" bg-[transparent] absolute z-[10] w-[9%] h-[15%] rounded-[5px] top-[61%] lg:left-[29%] left-[21%]"
            name="phil_button"
            onClick={(e) => change_values(e)}
          ></button>
          <button
            className="bg-[transparent] absolute z-[10] lg:w-[7%] w-[8%] h-[13%] rounded-[5px] top-[40%] lg:left-[34%] left-[28%] "
            name="innovation_button"
            onClick={(e) => change_values(e)}
          ></button>
          <button
            className="bg-[transparent] absolute z-[10] lg:w-[7%] w-[9%] h-[15%] rounded-[5px] top-[28%]  lg:left-[42%] left-[40%]"
            name="diversity_button"
            onClick={(e) => change_values(e)}
          ></button>
          <button
            className="bg-[transparent] absolute z-[10] lg:w-[7%] w-[9%] h-[15%] rounded-[5px] top-[28%]  left-[50.5%]"
            name="transparency_button"
            onClick={(e) => change_values(e)}
          ></button>
          <button
            className="bg-[transparent] absolute z-[10] lg:w-[7%] w-[10%] h-[15%] rounded-[5px] top-[39%]  lg:left-[59%] left-[62.5%]"
            name="passion_button"
            onClick={(e) => change_values(e)}
          ></button>
          <button
            className="bg-[transparent] absolute z-[10] lg:w-[8%] w-[12%] h-[15%] rounded-[5px] top-[60%]  lg:left-[63%] left-[67%]"
            name="positivity_button"
            onClick={(e) => change_values(e)}
          ></button>
        </div>
{/* ----------*******************------------------------  */}
       
        <h3 className="text-center titleStyle">
          <span className=" ">
            {title}
          </span>
        </h3>
        <h5 className="textStyle w-[60%]">
          {value}
        </h5>
      </div>
    </div>
        
    </div>
  )
}
