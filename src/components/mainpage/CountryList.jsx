import { Link } from "react-router-dom";
import { countryData } from "../../country";

const CountryList = () => {
  return (
    <div className="country-container">
      {countryData.map((item) => (
        <div className="country-card">
          <Link
            to={`/countryList/${item.id}/${item.Name}`}
            className="country-card-link"
            key={item.id}
          >
            <div>
              <img src={item.image} alt={item.Name} />
            </div>

            <div>{item.id}</div>
            <div>{item.Name}</div>
            <div>{item.model}</div>
            <div>{item.price}</div>
            <div>{item.category}</div>
            <div>{item.description}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
