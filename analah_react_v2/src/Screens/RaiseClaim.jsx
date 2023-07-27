import React from 'react';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import {  useMediaQuery } from "@mui/material";
import Raise from '../Components/Raise';
import Howitworks from '../Components/HowItworks';
import RaiseClaimForm from '../Components/RaiseClaimForm';

export const RaiseClaim = () => {
    const matches = useMediaQuery("(max-width:500px)");
  return (
    <div  >
    <Header raiseClaim={true}/>
    
    <div className={matches ? "" : ""} />
    <Raise />
    {/* <div className={matches ? "my-5 h-[10px]" : "my-8 h-[10px]"} /> */}
    <Howitworks />
      <div className={matches ? "my-5" : "my-8"} />
    <RaiseClaimForm />
    <div className={matches ? "my-5 h-[10px]" : "my-8 h-[10px]"} />
    <Footer />
  </div>
  )
}








