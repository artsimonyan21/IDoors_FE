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
              <p className=" xs:text-base text-sm">{contact?.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-full md:h-[450px] h-80 flex items-center bg-gray-300 shadow-md justify-center mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.2327016234144!2d44.52590546991843!3d40.12833196712441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abbdef25c1edf%3A0x32ad2fb805aeb87c!2s1%20Khaghagh%20Don%20St%2C%20Yerevan%200087!5e0!3m2!1sen!2sam!4v1693473555794!5m2!1sen!2sam"
          style={{ border: 0 } as React.CSSProperties}
          className=" border-none w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
