
import './App.css';
import {  Routes, Route  } from "react-router-dom";
import { Home } from './Screens/Home';
import TermLife from "./Screens/Insurances/TermLife";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      
        
      <Route path="/Term-Life" element={<TermLife />} />
      {/* <Route path="/Health" element={<HealthInsurance />} />
      <Route path="/Family" element={<FamilyHealth />} />
      <Route path="/2-Wheeler" element={<TwoWheeler />} />
      <Route path="/Car" element={<CarInsurance />} />
      <Route path="/Group" element={<GroupInsurance />} />
      <Route path="/Home" element={<HomeInsurance />} />
      <Route path="/Retirement" element={<RetirementInsurance />} />
      <Route path="/Raiseaclaim" element={<Raiseaclaim />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/become-posp" element={<BecomePosp />} />
      <Route path="/policy-cancel" element={<PolicyCancel />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/Investment" element={<InvestmentPlans />} />
      <Route path="/Guaranteed" element={<GuaranteedReturns />} />
      <Route path="/Travel" element={<Travel />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/term-condition" element={<TermCondition />} />
      */}



    </Routes>
  );
}

export default App;
