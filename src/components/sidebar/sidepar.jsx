import { Link } from "react-router-dom";
import "./sidebar.css"
import home  from "../../images/home.png"
import homeZome  from "../../images/home-with-zoom-tool.png"
import callHome  from "../../images/call.png"
import price  from "../../images/price.png"
import rent  from "../../images/rent.png"
import rent2  from "../../images/house.png"
import bell  from "../../images/bell.png"
import React, { useState } from 'react';

const Sidebar = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="sideBar">
       
      <div className="linkss">
       <ul>
          <Link onClick={()=>setIndex(0)} className="line" to="/">
            <img src={home} alt="" />
            <h4 className={`${index==0 && "active"}`}>الرئيسيه</h4>
            </Link>
            <Link onClick={()=>setIndex(1)} className="line" to="/buy">
            <img src={price} alt="" />
            <h4 className={`${index==1 && "active"}`}>ادارة بيع</h4>
            </Link>
            <Link onClick={()=>setIndex(2)} className="line" to="/sale">
            <img src={homeZome} alt="" />
            <h4 className={`${index==2 && "active"}`}>ادارة شراء</h4>
            </Link>
            <Link onClick={()=>setIndex(3)} className="line" to="/rento">
            <img src={rent} alt="" />
            <h4 className={`${index==3 && "active"}`}>عروض ايجار</h4>
            </Link>
            <Link onClick={()=>setIndex(4)} className="line" to="/rentr">
            <img src={rent2} alt="" />
            <h4 className={`${index==4 && "active"}`}>طلبات ايجار</h4>
            </Link>
            <Link onClick={()=>setIndex(5)} className="line" to="/ask">
            <img src={callHome} alt="" />
            <h4 className={`${index==5 && "active"}`}>الاستشارات</h4>
            </Link>
            <Link onClick={()=>setIndex(6)} className="line" to="/meeting">
            <img src={bell} alt="" />
            <h4 className={`${index==6 && "active"}`}>الاجتماعات</h4>
            </Link>
       </ul>
      </div>




    </div>
  );
};

export default Sidebar;