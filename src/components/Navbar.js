import { useContext } from "react";
import horoscopeObj from "../data/horoscopes";
import { HoroscopeContext } from "../contexts/HoroscopeContext";

const Navbar = () => {
  const { setHoroscope } = useContext(HoroscopeContext);
  const horoscopes = Object.keys(horoscopeObj);
  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign} onClick={() => setHoroscope(sign.toString())}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
