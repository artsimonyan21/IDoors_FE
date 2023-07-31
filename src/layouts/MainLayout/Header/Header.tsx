import "./header.scss";
// import Logo from "../../../../../assets/img/logo.svg";
// import SearchIcon from "../../../../../assets/img/search.svg";

// import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_logo">{/* <Logo /> */}</div>
      <div className="header_links">
        {/* <NavLink to="/"> */}
        <p>ԳԼԽԱՎՈՐ </p>
        {/* </NavLink> */}
        {/* <NavLink to="/"> */}
        <p>Մեր մասին</p>
        {/* </NavLink> */}
        {/* <NavLink to="/"> */}
        <p>ՏԵՍականի </p>
        {/* </NavLink> */}
        {/* <NavLink to="/"> */}
        <p>ՀԵՏԱԴԱՐՁ ԿԱՊ </p>
        {/* </NavLink> */}
      </div>
      <div className="header_search_wrapper">
        {/* <SearchIcon /> */}
        <div>select flags</div>
      </div>
    </div>
  );
};

export default Header;
