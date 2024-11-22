import React from "react";
import "./Card.css";

const Card = ({ icon: Icon, title, total, amount }) => {
  return (
    <div className="card">
      <div className="card-header">
        <Icon className="svg-icon" /> 
        <h3 className="card-title">{title}</h3> 
      </div>
      <div className="card-details">
        <p className="card-total">Total  <span className="total-amount">{total}</span></p> 
        <p className="card-amount"><span className="symbol">₹</span> <span className="price">{amount}</span></p> 
      </div>
    </div>
  );
};

export default Card;
