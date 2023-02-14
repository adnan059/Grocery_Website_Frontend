import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ShoppingCart = ({ ...item }) => {
  return (
    <>
      <div className="box">
        <FaRegTrashAlt className="trash" />
        <img src={item.image} alt="" />
        <div className="content">
          <h3>{item.product}</h3>
          <span className="price">{item.price}</span>
          <span className="quantity">Qty: {item.qty}</span>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
