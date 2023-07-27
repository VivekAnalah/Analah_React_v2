import { useMediaQuery } from "@mui/material";
import React from "react";
import {Header} from "./Header";
import Footer from "./Footer";
import "../App.css";
import { Link } from "react-router-dom";

function PolicyCancel() {
  const matches = useMediaQuery("(max-width:500px)");

  return (
    <div>
      <Header policyDetails={false} />

      <div className="bg-[linear-gradient(0deg, rgba(241, 246, 253, 0.00) 13.52%, rgba(241, 246, 253, 0.63) 30.11%, rgba(241, 246, 253, 0.63) 63.58%, rgba(255, 255, 255, 0.63) 100%)]">
      
        <div className="bg-[linear-gradient(0deg, rgba(241, 246, 253, 0.00) 13.52%, rgba(241, 246, 253, 0.63) 30.11%, rgba(241, 246, 253, 0.63) 63.58%, rgba(255, 255, 255, 0.63) 100%)]  w-[75%] m-auto mx-auto pb-10 lg:pb-20">
          <div className={ "pt-[70px]"}>
            <h2 className="textHeader1Lite">
              <span className=" title-border-bottom textHeader1">Policy</span> Cancellation
              & Refund{" "}
            </h2>
            <p className="textNormal mt-[40px]">
              {" "}
              Policy cancellation and refund of the premium shall be as per the
              terms and conditions of the policy.
            </p>
          </div>
          <div>
            <h2 className="mt-[47px] CancelPolicy">
              Cancellation Policy
            </h2>
            <p className="mt-[13px] CancelPolicyText">
              If in case you decide to cancel an insurance product, the
              insurance provider you purchased the product from will refund the
              premium via cheque or direct credit, depending on their policy.
              <br />
              <br />
              We request you to contact the toll free number of your Insurance
              Company or refer the respective section of your Policy’s terms and
              conditions in order to cancel a policy. Additionally, you may get
              in touch with us on <span class = "text-[#4C8CE7] font-semibold" >+91-9920878181</span> or write to us at
               <span class = "text-[#4C8CE7]  underline-offset-[1px]" style={{textDecoration : "underline"}} > contactus@analahinsurance.com,</span> and we will be happy to assist you.
            </p>
            <h2 className="CancelPolicy mt-[15px]">
              Refund Policy
            </h2>
            <p className="CancelPolicyText mt-[13px]">
              If a refund is required due to an erroneous transaction or
              cancellation, the insurance provider you purchased the product
              from will refund the premium through a cheque or direct credit, as
              per the policy terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PolicyCancel;
