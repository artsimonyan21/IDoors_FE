import "./if_interested.scss";
import Arrow from "../../assets/images/arrow.png";

const IfInterested = () => {
  return (
    <div className="if_interested_wrapper">
      <div>
        <h3>Եթե Ձեզ հետաքրքրեց մեր արտադրանքը կապ հաստատեք մեզ հետ</h3>
      </div>
      <button>
        կապ հաստատեԼ <img src={Arrow} alt="" />{" "}
      </button>
    </div>
  );
};

export default IfInterested;
