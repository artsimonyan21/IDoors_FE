import NewRange from "../../components/NewRange";
import SwiperAdverstising from "../../components/SwiperAdverstising";
import "./home.scss";
import DoorRange from "../../assets/images/doorRange.png";
import IfInterested from "../../components/IfInterested";
import SwiperShowItems from "../../components/SwiperShowItems";

const Home = () => {
  return (
    <div className="home_page_wrapper">
      <div className="home_swiper_wraper">
        <SwiperAdverstising />
      </div>
      <div className="new_range_wrapper">
        <h4>Նոր տեսականի</h4>
        <div>
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
        </div>
      </div>
      <IfInterested />
      <SwiperShowItems />
    </div>
  );
};

export default Home;
