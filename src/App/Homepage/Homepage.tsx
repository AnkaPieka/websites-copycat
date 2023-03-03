import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function Homepage() {
  return (
    <div id="homepage-body">
      <section className="title-and-description">
        <h3>I'm a copycat 😼</h3>

        <p>
          To train and improve my front end coding skills, I decided to create copies of
          websites I'm visiting (almost) daily. I used React, TypeScript and Sass.
        </p>
      </section>

      <section>
        <NavLink to="/ultimate-guitar">Ultimate Guitar</NavLink>
      </section>
    </div>
  );
}

export default Homepage;
