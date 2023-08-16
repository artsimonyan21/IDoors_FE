import "./products.scss";
import LineIcon from "../../assets/images/arrow.png";
import DoorItem from "../../components/DoorItem";
const Products = () => {
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
        <DoorItem />
        <DoorItem />
        <DoorItem />
        <DoorItem />
        <DoorItem />
        <DoorItem />
        <DoorItem />
        <DoorItem />
        <DoorItem />
        <DoorItem />
        <DoorItem />
      </div>
    </div>
  );
};

export default Products;
