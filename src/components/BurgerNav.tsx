import React from "react";

interface prop {
  onBurgerClick: () => void;
}
const BurgerNav = ({ onBurgerClick }: prop) => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        onClick={onBurgerClick}
        style={{
          color: "whitesmoke",
          margin: "18px",
          borderBottom: "2px solid whitesmoke",
          paddingBottom: "3px",
          position: "absolute",
          zIndex: "2",
        }}
      >
        <h5 className="offcanvas-title" id="offcanvasLabel">
          Menu
        </h5>
      </button>
    </>
  );
};
export default BurgerNav;
