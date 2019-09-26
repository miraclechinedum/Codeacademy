import React, { Fragment } from "react";
import { Button } from "antd";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <section className="head">
        <div className="first-part">
          <div className="firstpart-content">
            <img src="/static/images/codeacademy.png" alt="image here" />
          </div>
          <button>
            <a href="/">Catalog</a>
          </button>
          <button>
            <a href="/">Pricing</a>
          </button>
        </div>
        <div className="second-part">
          <button style={{ border: "1px solid #6400e4", color: "#6400e4" }}>
            <a href="/">Upgrade to Pro</a>
          </button>
          <button>
            <a href="/">Log in</a>
          </button>
          <button
            style={{
              backgroundColor: "#6400e4"
            }}
          >
            <a
              href="/"
              style={{
                color: "#fff"
              }}
            >
              Sign Up
            </a>
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
