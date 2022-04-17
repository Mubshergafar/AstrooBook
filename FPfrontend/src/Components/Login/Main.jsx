import React, { useContext, useRef } from "react";
import "./Main.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function Main() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handelClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="main">
      <div className="row">
        <div className="col-logo">
          <h1 className="name">ASTROBOOK</h1>
          <h2>Connect with collages and the world around you on AstroBook.</h2>
        </div>
        <div className="col-form">
          <div className="form-container">
            <form className="oginBox" onSubmit={handelClick}>
              <input
                type="email"
                required
                placeholder="Email address or phone number"
                ref={email}
              />
              <input
                type="password"
                required
                minLength="6"
                placeholder="Password"
                ref={password}
              />
              <button type="submit" className="btn-login">
                {isFetching ? <CircularProgress color="white" /> : "Login"}
              </button>
              <a href="#">Forgotten password?</a>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <button className="btn-new">
                  {isFetching ? (
                    <CircularProgress color="white" />
                  ) : (
                    "Create new Account"
                  )}
                </button>
              </Link>
            </form>
          </div>
          <p>
            <a href="#">
              <b>Create a Page</b>
            </a>{" "}
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
