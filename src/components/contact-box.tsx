import Button from "./ui/button";

const ContactBox = () => {
  return (
    <form className=" w-full flex items-center flex-col gap-y-4">
      <input
        type="text"
        placeholder="Անուն Ազգանուն"
        className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
      />
      <input
        type="email"
        placeholder="ԷԼ. ՓՈՍՏ"
        className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
      />
      <input
        type="text"
        placeholder="Հեռախոսահամար"
        className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
      />
      <textarea
        name=""
        id=""
        cols={30}
        rows={5}
        placeholder="ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆ"
        className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm resize-none py-4"
      ></textarea>
      <Button icon className=" w-full">
        Ուղարկել
      </Button>
    </form>
  );
};

export default ContactBox;
