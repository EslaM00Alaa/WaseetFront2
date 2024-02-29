import "./logo.css"
import img from "../../images/home.png"
const Logo = () => {
  return (
    <div className="logo">
      <div className="arlogo">
        <img src={img} alt="" />
        وسيط
      </div>
      <div className="enlogo">
        WASEET
      </div>
    </div>
  );
};

export default Logo;