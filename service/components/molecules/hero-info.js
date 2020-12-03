import React from "react";
import Countdown from "../atoms/countdown";
import LocationMarker from "../atoms/location-marker";
export default function HeroInfo() {
  return (
    <div className="info-hero">
      <Countdown />
      <LocationMarker />
    </div>
  );
}