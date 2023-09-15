import Button from "@/components/ui/button";
import door from "/images/doorRange.png";

const AboutCard = () => {
  return (
    <section className=" w-full h-1/2 grid lg:grid-cols-[1.5fr_1fr] items-center gap-10 mt-20">
      <div className=" h-full bg-white xs:p-10 p-5">
        <div className=" w-full flex items-start justify-between flex-col gap-4">
          <div className=" w-full flex items-start justify-between flex-col gap-4">
            <h2 className=" lg:text-7xl xs:text-5xl text-4xl font-[EZO-NA] tracking-wider uppercase text-blue-1">
              Մեր մասին
            </h2>
            <p className=" md:text-base xs:text-sm text-xs">
              iDoors Armenia-ն դռների արտադրությամբ զբաղվող ընկերություն է: Մենք
              առաջարկում ենք նմանը չունեցող դիզայնով և ամրությամբ մուտքի և
              միջսենյակային դռների մեծ տեսականի: Մեր պրոֆեսիոնալ մասնագետները
              կօգնեն ձեզ դռների չափագրման, տեղադրման և դիզայնի հարցում։
              Ընդունվում են պատվերներ․ սիրով կսպասենք ձեզ։
            </p>
          </div>
          <Button className=" md:w-1/3 xs:w-1/2 mt-10" icon>
            ՏԵՍականի
          </Button>
        </div>
      </div>
      <div className=" h-full max-h-96 w-full bg-blue-1 flex items-center justify-center aspect-square relative">
        <img
          src={door}
          alt=""
          className=" sm:max-w-[80%] max-w-[50%] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default AboutCard;
