import React from "react";
import { useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <h4 data-testid="location-display">{location.pathname}</h4>
    </>
  )
}