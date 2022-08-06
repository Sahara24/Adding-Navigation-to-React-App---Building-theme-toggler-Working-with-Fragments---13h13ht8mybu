import React from "react";
import { useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <h4 data-testid="location-display">{location.pathname}</h4>
    </>
  )
}
export default LocationDisplay;