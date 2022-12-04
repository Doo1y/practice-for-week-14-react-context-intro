import { useContext } from "react";
import horoscopeObj from "../data/horoscopes";
import { HoroscopeContext } from "../contexts/HoroscopeContext";
const Detail = () => {
  const { horoscope } = useContext(HoroscopeContext);
  const selected = Object.values(horoscopeObj).find(
    (x) => x.name === horoscope
  );
  const { name, backgroundImg, element, traits } = selected ? selected : {};
  return (
    <div className="details">
      <img
        src={
          backgroundImg
            ? backgroundImg
            : "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
        }
        alt=""
      />
      <h2>{name ? name : "Current Sign Name"}</h2>
      <h4>Element: {element ? element : ""}</h4>
      <h4>Traits: {traits ? traits : ""}</h4>
    </div>
  );
};

export default Detail;
