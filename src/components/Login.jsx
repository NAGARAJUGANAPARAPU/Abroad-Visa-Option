import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="img-1">
          <img
            src="https://i.pinimg.com/originals/a6/98/e6/a698e61e68788f2dd4f7da3a4477276e.jpg"
            alt="Abroad options"
          />
        </div>
        <div className="form-1">
          <h1 className="head">Abroad options</h1>
          <form>
            <input type="number" placeholder="Enter your mobile number" />
            <br />
            <button className="btnl" type="submit">
              Send Otp
            </button>
          </form>
          <span>
            By continuing, you agree to our{" "}
            <a href="/terms-and-conditions">terms &amp; conditions</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
