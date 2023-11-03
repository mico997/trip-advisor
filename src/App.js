import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getPlacesData } from "./api/travelAdvisorApi";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import Checker from "./components/default-page/checker";

const App = () => {
  // const checkLocation = () => {
  //   if (coords.lat && coords.lng) {
  //     setLocation(true);
  //   } else {
  //     setLocation(false);
  //   }
  // };

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  // const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    // console.log("ran useeffect", coords);
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );

    // console.log("ran useeffect", coords);
  }, []);

  useEffect(() => {
    if (coords.lat && coords.lng) {
      setLocation(true);
    } else {
      setLocation(false);
    }
  }, [coords]);

  useEffect(() => {
    const filtered = places?.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      setIsLoading(true);

      // getWeatherData(places).then((data) =>
      //   setWeatherData(data)
      // );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  return (
    <>
      <CssBaseline />
      <Header setCoords={setCoords} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            location={location}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          {location ? (
            <Map
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={filteredPlaces.length ? filteredPlaces : places}
              // weatherData={weatherData}
            />
          ) : (
            <Checker />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
