import React from "react";

import Bookings from "./Bookings";
import "./App.css";

import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCard";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

// props for TouristInfoCard
// headerName, link, bodyName

const cityDetails = [
  {
    id: 123,
    headerName: "LONDON",
    link: "https://www.visitlondon.com/",
    bodyName: "London",
    srcImage: "",
  },
  {
    id: 456,
    headerName: "MANCHESTER",
    link: "https://www.visitmanchester.com/",
    bodyName: "Manchester",
    srcImage:
      "https://cdn.britannica.com/42/116342-050-5AC41785/Manchester-Eng.jpg",
  },
  {
    id: 789,
    headerName: "GLASGOW",
    link: "https://peoplemakeglasgow.com/",
    bodyName: "Glasgow",
    srcImage: "",
  },
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      {cityDetails.map((cityProps) => {
        return <TouristInfoCard key={cityProps.id} {...cityProps} />;
      })}
      <Bookings />
      <Restaurant />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
