import React, { useEffect, useState } from 'react';
import {fetchdata,update,deleteOrder}from "../../Api/buyOrder";
import "./buy.css"

const Buy = () => {
  const [orders, setOrders] = useState([]);
  const [add, setAdd] = useState("");
  const [fPrice, setFprice] = useState(0);
  const [ePrice, setEprice] = useState(0);
 
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchdata(add,fPrice,ePrice);
        if (Array.isArray(data)) {
          setOrders(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, [add,fPrice,ePrice]);

  return (
    <div className="buy">

       <div className='filter'>

         <div>
          المكان
          <input onChange={(e)=>setAdd(e.target.value)} type="text" />
         </div>
         <div>
          السعر الابتدائي
          <input onChange={(e)=>setFprice(e.target.value)} type="text" />
         </div>
         <div>
          السعر النهائي
          <input onChange={(e)=>setEprice(e.target.value)} type="text" />
         </div>

      </div>

      <div className="orders">
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order, index) => (
           <OrderItem order={order} key={order.id} orders={orders} setOrders={setOrders}/>
          ))
        ) : (
          <div>No orders found</div>
        )}
      </div>
    </div>
  );
};

export default Buy;



const OrderItem = ({order,orders,setOrders})=> {
  const [checked, setChecked] = useState(order.marked); 
  console.log(order);
  return  <div className="order">
  <div>
    <input type="text" disabled value={order.name} />
  </div>
  <div>
    <input type="text" disabled value={order.phone} />
  </div>
  <div>
    <textarea disabled value={order.house_details}></textarea>
  </div>
  <div>
    <textarea disabled value={order.address_details}></textarea>
  </div>
  <div>
    <input type="text" disabled value={order.expected_price} />
  </div>
  <div className="icons">
    <div
      className="marked"
      onClick={() => {
        setChecked(!checked)
        update(!checked , order.id )
      }}
    >
      <div>
        <i
          className={`bi bi-check ${checked ? "yep" : "no"}`}
        ></i>
      </div>
    </div>
    <div onClick={()=>deleteOrder(order.id,orders,setOrders)} className="delete">
      <i className="bi bi-trash"></i>
    </div>
  </div>
</div>
}
