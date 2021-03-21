import React from "react";
import { Card } from "./styles";
import { StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <Card className="card border-light mb-3 mx-2 text-dark">
        <img
          style={{ height: "160px" }}
          src={restaurant.image}
          className="card-img-top"
          alt="..."
          className="mb-2"
        />
        <h4 style={{ fontSize: "17px" }} className="card-title">
          {restaurant.name}
        </h4>
        <p className="card-text" style={{ fontSize: "13px" }}>
          {restaurant.foodCategory}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span
            className="py-1 px-2"
            style={{
              backgroundColor:
                restaurant.rating >= 4 ? "#48C479" : restaurant.rating >= 3 ? "#DB7C38" : "#b82727",
              color: "white",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <StarFilled />
            &nbsp;<span>{restaurant.rating}</span>
          </span>
          <span style={{ fontWeight: "bold" }}>.</span>
          <span style={{ fontSize: "12px" }}>{restaurant.deliveryTime}MINS</span>
          <span style={{ fontWeight: "bold" }}>.</span>
          <span style={{ fontSize: "12px" }}>₹{restaurant.costForTwo} FOR TWO</span>
        </div>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
