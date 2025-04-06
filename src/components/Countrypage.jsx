// import React from "react";
import { countryData } from "../country";
import { useParams } from "react-router-dom";

const Countrypage = () => {
  const { id } = useParams();
  const selectedCountry = countryData.find((item) => item.id === id);

  return (
    <div className="country-page">
      <h2>Country Details</h2>
      {selectedCountry ? (
        <>
          <h1>{selectedCountry?.Name}</h1>
          <div className="country-image">
            <img
              src={selectedCountry?.image}
              alt={selectedCountry?.Name || "Country Image"}
            />
          </div>
          <p>{selectedCountry?.description} </p>
          <p> {selectedCountry?.model}</p>
          <p> {selectedCountry?.price}</p>
          <p> {selectedCountry?.category}</p>

          {selectedCountry?.url && (
            <a
              href={selectedCountry.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit the official website of ${selectedCountry?.Name}`}
            >
              Visit Official Website
            </a>
          )}
        </>
      ) : (
        <p>Loading country details...</p>
      )}
    </div>
  );
};

export default Countrypage;
