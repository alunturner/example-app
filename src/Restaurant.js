import React from "react";

const RestaurantButton = (props) => {
  return (
    <button className="btn btn-primary" onClick={props.handleClick}>
      Add
    </button>
  );
};

const Order = (props) => {
  const [orders, setOrders] = React.useState(0);

  function orderOne() {
    setOrders((previousOrders) => previousOrders + 1);
  }
  return (
    <li>
      {props.orderType} : {orders}
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Steaks" />
        <Order orderType="Curries" />
      </ul>
    </div>
  );
};

export default Restaurant;
