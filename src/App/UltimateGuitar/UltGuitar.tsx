import NavBar from "./components/NavBar/NavBar";
import "./style.scss";

function UltGuitar() {
  return (
    <div id="ult-guitar-wrapper">
      <div id="ult-guitar-main">
        <div className="top-publicity"></div>
        <NavBar />

        <section>
          <div className="side-navbar">side</div>
          <div className="center-part">center</div>
        </section>
      </div>
    </div>
  );
}

export default UltGuitar;
