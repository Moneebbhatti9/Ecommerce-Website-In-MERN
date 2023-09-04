import React from "react";
import "./css/order.css";
import { useLocation } from "react-router-dom";

const OrderScreen = () => {
  const location = useLocation();
  const orders =
    location.state && Array.isArray(location.state.order)
      ? location.state.order
      : [];
  console.log(orders.datatype);

  return (
    <div className="orders ">
      <div>
        <h3>Your Orders</h3>
        {orders.map((order) => (
          <div key={order.id}>
            <div>
              <img
                src={order.image}
                alt=""
                style={{ height: 100, width: 100 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderScreen;
