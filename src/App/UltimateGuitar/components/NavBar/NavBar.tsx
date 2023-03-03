import SearchBar from "./components/SearchBar";
import "./style.scss";

function NavBar() {
  return (
    <div id="ult-guitar-navbar-wrapper">
      <div id="ult-guitar-navbar-main">
        <section className="logo-and-brandname to-uppercase">
          <svg width="39" height="40" viewBox="0 0 39 40">
            <path
              d="M38.438 18.97c.053.568.038 1.394.038 1.975.025 10.502-8.57 19.032-19.195 19.055C8.657 40.023.023 31.53 0 21.03A18.894 18.894 0 0 1 5.707 7.475L3.76 5.63V0l5.146 4.958a19.462 19.462 0 0 1 20.79.079L34.998 0v5.631L32.875 7.58a18.9 18.9 0 0 1 4.716 7.674h-4.306C30.102 7.612 21.254 3.97 13.522 7.115 5.789 10.263 2.103 19.007 5.288 26.65c3.183 7.64 12.032 11.284 19.764 8.136 4.915-2 8.409-6.4 9.204-11.596H21.604l-4.015-4.22h20.849z"
              fill-rule="nonzero"
              fill="#ffc600"
            ></path>
          </svg>

          <p>
            ultimate<br></br>guitar<br></br>copy
          </p>
        </section>

        <section className="navigation-links">
          <nav>
            <a href="/">Tabs</a>
            <a href="/">Shots</a>
            <a href="/">Courses</a>
            <a href="/">Articles</a>
            <a href="/">Forums</a>
            <a href="/" style={{ whiteSpace: "nowrap" }}>
              <span>+</span>Publish tab
            </a>
            <a href="/">Pro</a>
          </nav>
        </section>

        <SearchBar />

        <section className="notifications">
          <span>
            <svg viewBox="0 0 16 16">
              <path
                d="M7.011 4.164a1 1 0 1 1 1.973 0 3.001 3.001 0 0 1 2.014 2.833v1c.002 1.334.335 2.334 1 3h-3V11a1 1 0 1 1-2 0v-.003H4c.665-.666.998-1.666.998-3v-1c0-1.31.841-2.425 2.013-2.833z"
                fill-rule="nonzero"
                fill="#7a7a7a"
              ></path>
            </svg>
          </span>
          <p>No news</p>
        </section>
      </div>
    </div>
  );
}

export default NavBar;
