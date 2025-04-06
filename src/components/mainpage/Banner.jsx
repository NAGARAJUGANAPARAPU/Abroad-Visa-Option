import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-left">
          <h1>India's most loved visa platform ❤️</h1>
          <h2>
            From application to approval,
            <br />
            our<span> visa experts got you</span>
          </h2>
        </div>
        <div className="banner-right">
          <div>
            <h3>
              Meet your <span>Visa Experts</span>
            </h3>
          </div>
          <div className="banner-right-flex-1">
            <div className="banner-right-img">
              <img
                src="https://th.bing.com/th/id/R.6c08cddaa19373ace161f93529249f24?rik=%2bH5k1mp6y1dYsA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_VYFvJ59ljXI%2fS4UlFPfgMTI%2fAAAAAAAAAws%2fR3F4mosSm3E%2fw1200-h630-p-k-no-nu%2fSachin%2btendulkar%2bhits%2bdouble%2bcentury%2b200.jpg&ehk=uU7RkuRVzvlc%2bz6XKFUtX6Cw%2fnNJtmdlHdcAzYziRNg%3d&risl=&pid=ImgRaw&r=0"
                alt="img"
              />
            </div>
            <div className="banner-right-flex-2">
              <div>
                <h5 style={{ margin: 0 }}>Nagaraju</h5>
                <p style={{ margin: 0, padding: 0 }}>
                  96% success rate for UK visas
                </p>
              </div>
              <div>
                <span>TRUSTED FOR</span>
                <div className="flag">
                  <img
                    src="https://th.bing.com/th/id/OIP.bnNdug3V41UnZ4Ojkst4SQHaFa?rs=1&pid=ImgDetMain"
                    alt="flag"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
