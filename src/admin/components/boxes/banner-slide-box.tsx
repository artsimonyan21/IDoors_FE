import { useAppStore } from "@/store/app-store";

const BannerSlideBox = () => {
  const onOpenEditModal = useAppStore((store) => store.onOpenEditModal);

  return (
    <div className=" w-full flex flex-col items-center gap-y-4 p-4 bg-white">
      <div className=" w-full aspect-video flex items-center justify-center">
        <div className=" w-1/3">
          <img
            src="/images/doorInAdverstising.png"
            alt=""
            className=" object-cover"
          />
        </div>
      </div>
      <div className=" w-full text-start mt-4">
        <h2>ԴՌՆԵՐԻ ԼԱՅՆ ԸՆՏՐԱՆԻ</h2>
        <p>Միայն որակյալ տեսականի հենց Ձեզ համար</p>
        <div className=" flex items-center gap-4 mt-4">
          <button
            className=" px-4 py-2 text-white bg-green-500"
            onClick={onOpenEditModal}
          >
            Խմբագրել
          </button>
          <button className=" px-4 py-2 text-white bg-red-500">Ջնջել</button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlideBox;
