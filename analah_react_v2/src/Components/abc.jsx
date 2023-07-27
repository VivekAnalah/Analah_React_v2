import React from "react";

export const abc = () => {
  return (
    <div className="flex w-[90%] ml-[50px] gap-[5%]">
      <div className="w-[25%] h-[fit-content] ml-[5%] rounded-[19px] bg-[#eceff3] pb-[20px] sticky top-[80px]">
        <div>
          <a href="#why">
            <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
              <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
              <div className="text-[#595959] text-[12px] font-400 text-start">gfdgdf</div>
              <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
            </button>
          </a>
        </div>

        <div>
          <a href="#what">
            <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
              <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
              <div className="text-[#595959] text-[12px] font-400 text-start">
                What is Travel Insurance?
              </div>
              <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
            </button>
          </a>
        </div>
      </div>

      <div className="w-[70%]">
        <div>
        

          <section id="why" className="scroll-mt-[100px]">
          
             
       
          </section>

          <section id="what" className="scroll-mt-[100px]">
  
          </section>

       
        </div>

      </div>
    </div>
  );
};
