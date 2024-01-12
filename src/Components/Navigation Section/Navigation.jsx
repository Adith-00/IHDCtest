import React, { useState } from "react";
import "../../Assets/Css/navigation/navigation.css";
import { HomeIcon, LogoutIcon, hamburegrMenu, menu } from "../../Assets/image";
import { Option } from "./NavigationOption";
import { NavigationMenus } from "../../Assets/consts/const";

export const Navigation = () => {
  const [navigate, setNavigate] = useState(1);
  const [hamburgerMenu, setHamburger] = useState(false);
  return (
    <div className="Navigation">
      <h1 className="menuLogo">
        <img src={menu} alt="Logo" />
      </h1>
      <div className="options">
        {NavigationMenus.map((item) => {
          const { id, text, img } = item;
          return (
            <Option
              id={id}
              img={img}
              text={text}
              setNavigate={setNavigate}
              navigate={navigate}
              setHamburger={setHamburger}
            />
          );
        })}
      </div>
      <div className="options">
        <Option
          text={"Log Out"}
          img={LogoutIcon}
          setNavigate={setNavigate}
          navigate={navigate}
          setHamburger={setHamburger}
          id={5}
        />
      </div>

      <div
        className="hamburger"
        onClick={() => {
          setHamburger(hamburgerMenu ? false : true);
        }}
      >
        <img src={hamburegrMenu} alt="hamburger" />
      </div>

      {hamburgerMenu && (
        <div className="dropdown">
          {NavigationMenus.map((item) => {
            const { id, text, img } = item;
            return (
              <Option
                id={id}
                img={img}
                text={text}
                setNavigate={setNavigate}
                navigate={navigate}
                setHamburger={setHamburger}
              />
            );
          })}
          <Option
            text={"Log Out"}
            img={LogoutIcon}
            setNavigate={setNavigate}
            navigate={navigate}
            id={5}
            setHamburger={setHamburger}
          />
        </div>
      )}
    </div>
  );
};
