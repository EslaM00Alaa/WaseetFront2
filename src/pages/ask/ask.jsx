import React, { useEffect, useState } from 'react';
import {fetchdata,update,deleteOrder}from "../../Api/askOrder";
import "./ask.css"

const Ask = () => {
  const [orders, setOrders] = useState([]);
 
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchdata();
        if (Array.isArray(data)) {
          setOrders(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <div className="buy">
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

export default Ask;



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
