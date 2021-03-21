import React, { useEffect } from "react";
import RestaurantsCollections from "./RestaurantsCollections/RestaurantsCollections";
import RestaurantsList from "./RestaurantsList/RestaurantsList";

const RestaurantsPage = ({ history }) => {
  useEffect(() => {
    const location = localStorage.getItem("location");

    if (!location) {
      history.push("/");
    }
  }, []);
  return (
    <>
      <RestaurantsCollections />
      <RestaurantsList />
    </>
  );
};

export default RestaurantsPage;
