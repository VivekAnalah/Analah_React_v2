
import './App.css';
import {  Routes, Route  } from "react-router-dom";
import { Home } from './Screens/Home';
import TermLife from "./Screens/Insurances/TermLife";
import HealthInsurance from './Screens/Insurances/HealthInsurance';
import FamilyHealth from './Screens/Insurances/FamilyHealth';
import GroupInsurance from './Screens/Insurances/GroupInsurance';
import CarInsurance from './Screens/Insurances/CarInsurance';
import HomeInsurance from './Screens/Insurances/HomeInsurance';
import Travel from './Screens/Insurances/TravelInsurance';
import RetirementInsurance from './Screens/Insurances/Retirement';
import TwoWheeler from './Screens/Insurances/TwoWheeler';
import { RaiseClaim } from './Screens/RaiseClaim';
import BecomePosp from './Screens/BecomePosp';
import Disclaimer from './Screens/Disclaimer';
import PrivacyPolicy from "./Screens/PrivacyPolicy"
import TermCondition from './Screens/TermCondition';
import PolicyCancel from './Components/Policy_Cancel';
import Careers from './Screens/Careers';


// import InvestmentPlans from './Screens/Insurances/InvestmentPlans';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      
        
      <Route path="/Term-Life" element={<TermLife />} />
       <Route path="/Health" element={<HealthInsurance />} />
      <Route path="/Family" element={<FamilyHealth />} />
      <Route path="/Group" element={<GroupInsurance />} />
      <Route path="/Car" element={<CarInsurance/>} />
      <Route path="/Home" element={<HomeInsurance />} />
      <Route path="/Travel" element={<Travel />} />
      <Route path="/Retirement" element={<RetirementInsurance />} />
      <Route path="/2-Wheeler" element={<TwoWheeler />} />
      <Route path="/Raiseaclaim" element={<RaiseClaim />} />
      <Route path="/become-posp" element={<BecomePosp />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/term-condition" element={<TermCondition />} />
      <Route path="/policy-cancel" element={<PolicyCancel />} />
      <Route path="/careers" element={<Careers />} />
     
      

      {/*
      { <Route path="/Investment" element={<InvestmentPlans />} /> }
      <Route path="/Guaranteed" element={<GuaranteedReturns />} />
      */}



    </Routes>
  );
}

export default App;
