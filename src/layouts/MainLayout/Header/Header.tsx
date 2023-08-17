import "./header.scss";
// import Logo from "../../../../../assets/img/logo.svg";
// import SearchIcon from "../../../../../assets/img/search.svg";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_logo">{/* <Logo /> */}</div>
      <div className="header_links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ԳԼԽԱՎՈՐ
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Մեր մասին
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ՏԵՍականի
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ՀԵՏԱԴԱՐՁ ԿԱՊ
        </NavLink>
      </div>
      <div className="header_search_wrapper">
        {/* <SearchIcon /> */}
        <div>select flags</div>
      </div>
    </div>
  );
};

export default Header;
