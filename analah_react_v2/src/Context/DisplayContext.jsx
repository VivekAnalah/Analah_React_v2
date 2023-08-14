import { createContext, useState } from "react";

export const display = createContext();

const DisplayProvider = ({ children }) => {
  const [openInvestment, setOpenInvestment] = useState(false);

  const setInvestment = () => {
    setOpenInvestment(!openInvestment);
  };

  return (
    <display.Provider value={{ setInvestment, openInvestment }}>
      {children}
    </display.Provider>
  );
};

export default DisplayProvider;
