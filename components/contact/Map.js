import React from "react";
import { Map, Marker } from "pigeon-maps";
// --------------
const MapView = () => {
  return (
    <div className="w-full mt-5">
      <iframe
        width="100%"
        height="300"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Tehran%20Province,%20Tehran,%20Orkideh,%20Iran,Tapsi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/marine-gps/">marine gps</a>
      </iframe>
    </div>
  );
};

export default MapView;
