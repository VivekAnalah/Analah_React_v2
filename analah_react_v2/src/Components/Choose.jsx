import React from "react";
import "../Styles/chooseUs.css";

export const Choose = () => {
  return (
   
<div class=" w-[100%] pt-[50px] bg-[#f6fafe]" >
      <div class="topic">Why <sapn class="topic2">Choose Us?</sapn></div>

      <div class="content">
        <input type="radio" name="slider" defaultChecked={true} id="home" />
        <input type="radio" name="slider" defaultChecked={false} id="blog" />
        <input type="radio" name="slider" defaultChecked={false} id="help" />
        <input type="radio" name="slider" defaultChecked={false} id="code" />
      

        <div class="list">
          <label for="home" class="home">
            <span>Calculate in Minutes</span>
          </label>
          <label for="blog" class="blog">
            <span>30+ Insurance Partners</span>
          </label>
          <label for="help" class="help">
            <span>Simplest Way to Get Insured</span>
          </label>
          <label for="code" class="code">
            <span> Claims Assistance</span>
          </label>

          <div class="slider"></div>
        </div>

        <div class="text-content">
          <div class="home text">
            <p>
                Calculate premiums like never before. All insurance quotes are system
                generated, which eradicate the scope of any human error and reduce the
                time needed to calculate premiums.
            </p>
          </div>
          <div class="blog text">
          
                <p>
                    Compare features and prices of multiple insurance policies easily.
                    Shortlist plans that best meet your needs.
                  </p>
                  
                    <li>Get best quotes from top insurers instantly</li>
                    <li>Compare plans and shortlist the best plan</li>
               
            
          </div>
          <div class="help text">
            <p>
                Applying for Insurance has never been easier! We have online forms
                that ask questions based on the applicant’s demographics and
                profile.
              </p>
            
                <li>
                  All plans are explained in English. No additional research is
                  required
                </li>
                <li>Application process is completely online</li>
                <li>Unbiased advice from experts with extensive experience</li>
             
          </div>
          <div class="code text">
            <p >
                We know how exhausting it can get to raise a claim. We at Analah
                Insurance, have support built in with every policy for help,
                especially when you need it the most.
              </p>
          </div>
        
        </div>
      </div>
    </div>  

    
  );
};
