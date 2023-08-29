import Button from "./ui/button";

const IfInterested = () => {
  return (
    <div className=" w-full h-fit py-20 md:px-10 px-5 flex items-center justify-center flex-col gap-y-6 bg-white">
      <div>
        <h3 className=" uppercase font-semibold lg:text-3xl md:text-2xl text-xl text-center">
          Եթե Ձեզ հետաքրքրեց մեր <br /> արտադրանքը կապ հաստատեք մեզ հետ
        </h3>
      </div>
      <Button className=" lg:w-1/3 sm:w-1/2 w-3/4 py-6 px-8" icon>
        կապ հաստատեԼ
      </Button>
    </div>
  );
};

export default IfInterested;
