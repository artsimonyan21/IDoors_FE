import "./products.scss";
import LineIcon from "../../assets/images/arrow.png";

import FirstArrangement from "./components/FirstArrangement";
import SecondArrangement from "./components/SecondArrangement";
import { NavLink, useSearchParams } from "react-router-dom";

const components = {
  first_arrangement: FirstArrangement,
  second_arrangement: SecondArrangement,
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") as keyof typeof components;

  console.log("disukfiudhfiuhf", type);
  const Component = components[type];

  return (
    <div className="products_wrapper">
      <div className="category_change_wrapper">
        <h3>ՏԵՍականի</h3>
        <button>
          Մետաղական դռներ <img src={LineIcon} alt="" />
        </button>
        <button>
          Մուտքի դռներ <img src={LineIcon} alt="" />
        </button>
        <button>
          Սենյակային դռներ <img src={LineIcon} alt="" />
        </button>
      </div>
      <div className="products_wrapper_content">
        <div>
          <NavLink to="/products?type=first_arrangement"></NavLink>
          <NavLink to="/products?type=first_arrangement"></NavLink>
        </div>

        <Component />
      </div>
    </div>
  );
};

export default Products;
