import ContactBox from "@/components/contact-box";
import { contacts } from "@/constants/contsants";

const ContactUs = () => {
  return (
    <section className=" w-full pt-[102px] pb-20 px-10 flex items-center flex-col">
      <header className=" w-full flex items-center justify-start py-4">
        <h2 className=" lg:text-7xl xs:text-5xl text-4xl font-[EZO-NA] tracking-wider uppercase text-blue-1">
          Կապ
        </h2>
      </header>
      <div className=" w-full grid md:grid-cols-[1.5fr_2fr] gap-10">
        <div className=" w-full flex gap-10">
          <ContactBox />
          <div className=" hidden md:block w-[1px] h-full bg-gray-1" />
        </div>
        <ul className=" w-full flex items-start justify-center flex-col gap-2">
          {contacts?.map((contact, index: number) => (
            <li key={index} className=" w-fit flex items-center gap-x-2 text-blue-1">
              <img src={contact?.icon} alt={contact?.name} />
              <p>{contact?.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-full h-80 flex items-center justify-center mt-20">
        <img
          src="/src/assets/images/map.png"
          alt=""
          className=" md:w-3/4 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ContactUs;
