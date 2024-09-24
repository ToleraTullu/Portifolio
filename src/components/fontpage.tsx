import {} from "./frontpage.css";
import bgImag from "../assets/starrynight.jpg";
import { MouseEvent, useState } from "react";

interface prop {
  onBodyClick: () => void;
}

const FrontPage = ({ onBodyClick }: prop) => {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [width, setWidth] = useState("400px");
  let [height, setHeight] = useState("400px");
  let [radius, setRadius] = useState("50%");
  let [bodyclicked, setBodyClick] = useState(false);
  let [opacityMotto, setOpacityMotto] = useState("0");

  const mottos = ['" Creativity is', "intelligence having", 'Fun" '];

  const BannerClicked = () => {
    setHeight("100vh");
    setWidth("100vw");
    setRadius("0");
    setX(0);
    setY(0);
    setOpacityMotto("1");
    setBodyClick(true);
  };

  const hoverEffect = () => {
    if (bodyclicked) {
      setOpacityMotto("1");
    } else setOpacityMotto("0");
  };
  const onMouseMove = (event: MouseEvent) => {
    if (bodyclicked == false) {
      setX(event.clientX - 200);
      setY(event.clientY - 200);
    }
  };
  return (
    <>
      <div
        className="contanier"
        onMouseMove={onMouseMove}
        onClick={onBodyClick}
      >
        <img className="backImg" src={bgImag} alt="background Image" />
        <div
          className="mousefollow"
          style={{
            left: x,
            top: y,
            width: width,
            height: height,
            borderRadius: radius,
          }}
        ></div>
        <div className="banner" onClick={BannerClicked}>
          <h3 className="motto">
            {mottos.map((item, index) => (
              <h3
                className="motto"
                key={index}
                onMouseOver={() => setOpacityMotto("1")}
                onMouseLeave={hoverEffect}
                style={{ opacity: opacityMotto }}
              >
                {item}
              </h3>
            ))}{" "}
            <br />
            <span
              className="motto"
              onMouseOver={() => setOpacityMotto("1")}
              onMouseLeave={hoverEffect}
              style={{ opacity: opacityMotto }}
            >
              {" "}
              Albert Einstein
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
