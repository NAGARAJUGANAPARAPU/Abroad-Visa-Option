// import React from "react";

// const Toprated = () => {
//   return (
//     <div>
//       <div className="toprated">
//         <div className="top-1">
//           <img
//             src="https://teleportvisa.cdn.bubble.io/f1672898521444x870094357716640900/Star%201.svg"
//             alt="star1"
//             className="star"
//           />
//           <img
//             src="https://teleportvisa.cdn.bubble.io/f1672898521444x870094357716640900/Star%201.svg"
//             alt="star2"
//             className="star"
//           />
//           <img
//             src="https://teleportvisa.cdn.bubble.io/f1672898521444x870094357716640900/Star%201.svg"
//             alt="star3"
//             className="star"
//           />
//           <img
//             src="https://teleportvisa.cdn.bubble.io/f1672898521444x870094357716640900/Star%201.svg"
//             alt="star4"
//             className="star"
//           />
//           <img
//             src="https://teleportvisa.cdn.bubble.io/f1672898521444x870094357716640900/Star%201.svg"
//             alt="star5"
//             className="star"
//           />
//           <h2>Best Visa Assistance in India</h2>
//           <h3>
//             Top rated visa service on Google
//             <img
//               className="goggle"
//               src="https://useteleport.com/home-main/home-google-icon.png"
//               alt="Google"
//             />
//             reviews.
//           </h3>
//         </div>

//         <section className="row">
//           <div className="profile">
//             <h4>Nagaraju</h4>
//             <p>
//               Nagaraju is a seasoned visa consultant with over 10 years of
//               experience.
//             </p>
//             <p>
//               He has successfully assisted thousands of clients in obtaining
//               their visas.
//             </p>
//             <p>
//               His expertise spans across various visa categories and countries.
//             </p>
            
//           </div>

//           <div className="profile">
//             <h4>Shruthi</h4>
//             <p>Shruthi is a visa consultant with over 5 years of experience.</p>
//             <p>
//               She has a proven track record of assisting clients in obtaining
//               their visas.
//             </p>
//             <p>
//               Shruthi specializes in visa applications for countries in Europe
//               and North America.
//             </p>
            
//           </div>

//           <div className="profile">
//             <h4>Praveen</h4>
//             <p>Praveen is a visa consultant with over 7 years of experience.</p>
//             <p>
//               He has helped numerous clients navigate the visa application
//               process successfully.
//             </p>
//             <p>
//               Praveen has expertise in visa applications for countries in Asia
//               and the Middle East.
//             </p>
           
//           </div>

//           <div className="profile">
//             <h4>Swaroopa</h4>
//             <p>
//               Swaroopa is a visa consultant with over 8 years of experience.
//             </p>
//             <p>She has a strong background in handling complex visa cases.</p>
//             <p>
//               Swaroopa specializes in student and work visas for various
//               countries.
//             </p>
            
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Toprated;

import React from "react";

const StarRating = ({ count }) => (
  <div className="stars">
    {[...Array(count)].map((_, i) => (
      <img
        key={i}
        src="https://teleportvisa.cdn.bubble.io/f1672898521444x870094357716640900/Star%201.svg"
        alt={`star-${i + 1}`}
        className="star"
      />
    ))}
  </div>
);

const Profile = ({ name, experience, description, specialization }) => (
  <div className="profile">
    <h3>{name}</h3>
    <p>{experience}</p>
    <p>{description}</p>
    <p>{specialization}</p>
  </div>
);

const Toprated = () => {
  const consultants = [
    {
      name: "Nagaraju",
      experience: "Nagaraju is a seasoned visa consultant with over 10 years of experience.",
      description: "He has successfully assisted thousands of clients in obtaining their visas.",
      specialization: "His expertise spans across various visa categories and countries.",
    },
    {
      name: "Shruthi",
      experience: "Shruthi is a visa consultant with over 5 years of experience.",
      description: "She has a proven track record of assisting clients in obtaining their visas.",
      specialization: "Shruthi specializes in visa applications for countries in Europe and North America.",
    },
    {
      name: "Praveen",
      experience: "Praveen is a visa consultant with over 7 years of experience.",
      description: "He has helped numerous clients navigate the visa application process successfully.",
      specialization: "Praveen has expertise in visa applications for countries in Asia and the Middle East.",
    },
    {
      name: "Swaroopa",
      experience: "Swaroopa is a visa consultant with over 8 years of experience.",
      description: "She has a strong background in handling complex visa cases.",
      specialization: "Swaroopa specializes in student and work visas for various countries.",
    },
  ];

  return (
    <div className="toprated">
      <div className="top-1">
        <StarRating count={1} />
        <h2>Best Visa Assistance in India</h2>
        <h3>
          Top rated visa service on Google{" "}
          <img
            className="google"
            src="https://useteleport.com/home-main/home-google-icon.png"
            alt="Google reviews"
          />
        </h3>
      </div>

      <section className="row">
        {consultants.map((consultant, index) => (
          <Profile key={index} {...consultant} />
        ))}
      </section>
    </div>
  );
};

export default Toprated;
