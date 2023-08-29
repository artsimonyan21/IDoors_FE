import ContactBox from "@/components/contact-box";
import RecomendedDoors from "@/components/recomended-doors";
import SingleProductBox from "@/components/single-product-box";
import { useParams } from "react-router";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <section className=" w-full pt-[112px] px-10 flex items-center flex-col">
      <div className=" w-full grid md:grid-cols-[2fr_1.5fr] gap-10">
        <div className=" w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-x-10 mt-20">
          <div className=" w-full">
            <SingleProductBox />
          </div>
          <div className=" text-sm lg:mt-0 mt-10">
            <p>Շրջանակ – ԿՎ80*40 2ՄՄ ՇՎ 8-10սմ</p>
            <p>Մետաղական թիթեղ – 1.2մմ</p>
            <p>Անկյունակ – 40*40 30*30</p>
            <p>Հումք – Բուլղարական МДФ</p>
            <p>Լիցք – պենոպլաստ</p>
            <p>Փական – 2</p>
          </div>
        </div>
        <div className=" w-full flex items-start flex-col relative md:pl-6">
          <div className=" absolute left-0 hidden md:block w-[1px] h-full bg-gray-1" />
          <header className=" w-full pb-6">
            <h3 className=" font-bold">Եթե Ձեզ հետաքրքրեց տվյալ մոդելը կապ հաստատեք մեզ հետ</h3>
          </header>
          <div className=" w-full flex justify-start gap-x-6">
            <ContactBox />
          </div>
        </div>
      </div>
      <div className=" w-full mt-10">
        <RecomendedDoors />
      </div>
    </section>
  );
};

export default SingleProduct;
