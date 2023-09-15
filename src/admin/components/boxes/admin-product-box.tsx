import { useAppStore } from "@/store/app-store";

const AdminProductBox = () => {
  const onOpenEditModal = useAppStore((store) => store.onOpenEditModal);

  return (
    <div className=" w-full flex flex-col items-center gap-y-4 p-4 bg-white">
      <div className=" w-full aspect-video flex items-center justify-center">
        <div className=" w-1/3">
          <img src="/images/doorRange.png" alt="" className=" object-cover" />
        </div>
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2 text-start mt-4">
        <div className=" flex lg:flex-row flex-col items-start gap-x-4">
          <span className=" text-blue-1 font-semibold">ID:</span>
          <p>WNG008 ID-002</p>
        </div>
        <div className=" flex lg:flex-row flex-col items-start gap-x-4">
          <span className=" text-blue-1 font-semibold">Նկարագրությունը:</span>
          <ul className=" text-sm mt-2">
            <li>Շրջանակ – ԿՎ80*40 2ՄՄ ՇՎ 8-10սմ</li>
            <li>Մետաղական թիթեղ – 1.2մմ</li>
            <li>Անկյունակ – 40*40 30*30</li>
            <li>Հումք – Բուլղարական МДФ</li>
            <li>Լիցք – պենոպլաստ</li>
            <li>Փական – 2</li>
          </ul>
        </div>
        <div className=" flex lg:flex-row flex-col items-start gap-x-4">
          <div>
            <span className=" text-blue-1 font-semibold">Կատեգորիա:</span>
          </div>
          <div>
            <span>Սենյակային դռներ</span>
          </div>
        </div>
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

export default AdminProductBox;
