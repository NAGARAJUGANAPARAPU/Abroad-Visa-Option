import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="blog-1">
          <h1>Teleport Blogs: Visa and Travel Articles</h1>
          <h2>Recently Published</h2>
          <figure>
            <img
              src="https://images.prismic.io/teleport-blog/Z7MthJ7c43Q3f23C_BlogHeroImage.png?auto=format,compress"
              alt="example-image"
            />
          </figure>
          <div>
            <h4>
              Explore the Best of New Zealand: Top 15 Must-See Destinations
            </h4>
            <p>
              Discover New Zealand’s top 15 most beautiful &amp; famous places
              to visit. From vibrant cities like Auckland to stunning
              landscapes, explore the best tourist spots!
            </p>
            <span>Read more</span>
          </div>
        </div>
        <div className="blog-2">
          <div className="flex-1">
            <img
              src="https://images.prismic.io/teleport-blog/Z7MhXp7c43Q3f2tV_BlogHeroImage-16-.png?auto=format,compress"
              alt="blogs-example"
            />
            <div className="flex-1-1">
              <h4>
                South Africa Visa <br />
                Denied? Key Reasons for
              </h4>
              <p>
                Struggling with a South <br />
                Africa visa rejection? Explore
              </p>
              <span>Read more</span>
            </div>
          </div>
          <div className="flex-2">
            <img
              src="https://images.prismic.io/teleport-blog/Z677DJbqstJ9-nt6_1.png?auto=format,compress"
              alt="blogs-example"
            />
            <div className="flex-1-2">
              <h4>How to Get Your New Zealand Visa Photo Right.</h4>
              <p>
                Get your New Zealand visa application approved with the perfect
              </p>
              <span>Read more</span>
            </div>
          </div>
          <div className="flex-3">
            <img
              src="https://images.prismic.io/teleport-blog/Z68hqJbqstJ9-oJP_BlogHeroImage-53-.png?auto=format,compress"
              alt="blogs-example"
            />
            <div className="flex-1-3">
              <h4>Top 10 Must-Visit Places in Australia: Explore the</h4>
              <p>
                Explore the best places to visit in Australia, from iconic
                Sydney <br />
              </p>
              <span>Read more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
