import {} from "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {} from "./Nav.css";

interface prop {
  NavList: string[];
  onNavClick?: () => void;
}

const Nav = ({ NavList, onNavClick }: prop) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start show"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onNavClick}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="list-group list-group-flush">
            {NavList.map((item) => {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  key={item}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
