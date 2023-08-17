import "./products.scss";
import LineIcon from "../../assets/images/arrow.png";

// import FirstArrangement from "./components/FirstArrangement";
import SecondArrangement from "./components/SecondArrangement";
// import { useState } from "react";

const Products = () => {
  // const [changeArrangement, setChangeArrangement] = useState({
  //   firstArrangement: true,
  //   secondArrangement: false,
  // });

  // const handleChangeArrangement = () => {};

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
        <div></div>

        {/* <FirstArrangement /> */}
        <SecondArrangement />
      </div>
    </div>
  );
};

export default Products;
