import Box from "../components/Box/Box";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import "./style.scss";

function UltGuitar() {
  return (
    <div id="ult-guitar-wrapper" className="flex-column">
      <div id="ult-guitar-main">
        <div className="top-publicity"></div>
        <NavBar />

        <article id="ult-guitar-body">
          <SideBar />
          <section>
            <Box title="Pro">Hello</Box>
          </section>
        </article>
      </div>
    </div>
  );
}

export default UltGuitar;
