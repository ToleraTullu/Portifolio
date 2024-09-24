import { useState } from "react";
import "./App.css";
import MyNav from "./components/MyNav";
import BurgerNav from "./components/BurgerNav";
import FrontPage from "./components/fontpage";

function App() {
  let [Nav, setNav] = useState(false);
  const navBar = () => {
    if (Nav) setNav(false);
    else setNav(true);
  };
  return (
    <>
      <BurgerNav onBurgerClick={navBar} />
      {Nav && (
        <MyNav
          NavList={["Home", "Projects", "About", "Contact"]}
          onNavClick={navBar}
        ></MyNav>
      )}
      <FrontPage onBodyClick={() => setNav(false)} />
    </>
  );
}

export default App;
