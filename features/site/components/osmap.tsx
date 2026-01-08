"use client";

import { useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";

export default function VectorMap() {
  const key = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  if (!key) {
    return <div style={{ height: 550 }}>Missing MapTiler key</div>;
  }

  const [viewState, setViewState] = useState({
    longitude: 85.345014,
    latitude: 27.720021,
    zoom: 15.8,
  });

  return (
    <div style={{ height: 550, borderRadius: 10, overflow: "hidden" }}>
      <Map
        {...viewState}
        onMove={(e) => setViewState(e.viewState)}
        mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`}
      >
        <NavigationControl position="top-left" />
        <Marker longitude={85.345014} latitude={27.720021} />
      </Map>
    </div>
  );
}
