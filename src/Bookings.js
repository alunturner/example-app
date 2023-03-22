import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const myRef = React.useRef(null);
  const [bookings, setBookings] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [status, setStatus] = React.useState("");
  // status is either
  // fetching
  // ready
  // errored

  React.useEffect(() => {
    setIsLoading(true);
    fetch("https://temporary-cyf-react.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        console.log("setting some data");
        setBookings(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const searchFunction = (searchVal) => {
    setSearchTerm(searchVal);
  };

  const filteredBookings = bookings.filter((booking) => {
    const { firstName, surname } = booking;
    if (searchTerm === "") {
      return true;
    }
    return searchTerm === firstName || searchTerm === surname;
  });

  return (
    <div className="App-content" ref={myRef}>
      <div className="container">
        <Search searchFunction={searchFunction} />
        {!isLoading && <SearchResults results={filteredBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
