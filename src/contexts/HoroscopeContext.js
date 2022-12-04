import { createContext, useState } from "react";
import horoscopes from "../data/horoscopes";

export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [horoscope, setHoroscope] = useState("");

  return (
    <HoroscopeContext.Provider value={{ horoscope, setHoroscope, horoscopes }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
