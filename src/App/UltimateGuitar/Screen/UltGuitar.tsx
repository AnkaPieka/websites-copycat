import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import "./style.scss";

function UltGuitar() {
  return (
    <div id="ult-guitar-wrapper" className="flex-column">
      <div id="ult-guitar-main">
        <div className="top-publicity"></div>
        <NavBar />

        <section id="ult-guitar-body">
          <SideBar />
          <div className="center-part">center</div>
        </section>
      </div>
    </div>
  );
}

export default UltGuitar;
