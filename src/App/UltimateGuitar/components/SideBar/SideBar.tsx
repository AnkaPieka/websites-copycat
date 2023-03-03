import React from "react";
import "./style.scss";

function SideBar() {
  return (
    <div id="ult-guitar-left-sidebar">
      <article className="user-toolbox flex-column">
        <section className="user-informations">
          <div className="profile-pic" />

          <div className="profile-details">
            <p>Username</p>
            <p>10</p>
          </div>
        </section>

        <section className="user-links flex-column">
          <a href="/">
            <span className="to-uppercase">my tabs</span>
            <div>116</div>
          </a>
          <a href="/">
            <span className="to-uppercase">playlist</span>
            <div>5</div>
          </a>
          <a href="/">
            <span className="to-uppercase">messages</span>
            <div>1</div>
          </a>
          <a href="/">
            <span className="to-uppercase">settings</span>
          </a>
          <a href="/">
            <span className="to-uppercase">subscriptions</span>
          </a>
        </section>
      </article>

      <div className="divider"></div>

      <article className="website-users-informations"></article>
    </div>
  );
}

export default SideBar;
