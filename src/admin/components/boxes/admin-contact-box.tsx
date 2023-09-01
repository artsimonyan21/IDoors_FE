import { useMainContext } from "@/providers/main-provider";

const AdminContactBox = () => {
  const { handleOpenAdminModal } = useMainContext();
  return (
    <div className=" w-full flex flex-col items-start gap-y-4 p-4 bg-white">
      <ul className=" w-full flex flex-col items-start gap-y-4 p-4 bg-white">
        <li className=" flex items-center gap-x-2">
          <span>Mail:</span>
          <p>info@idoors.am</p>
        </li>
        <li className=" flex items-center gap-x-2">
          <span>Address:</span>
          <p>Նար-Դոս 36/19 (խանութ-սրահ)</p>
        </li>
        <li className=" flex items-center gap-x-2">
          <span>Address:</span>
          <p>Խաղաղ Դոնի 1/9 (Արտադրամաս,խանութ-սրահ)</p>
        </li>
        <li className=" flex items-center gap-x-2">
          <span>Phone:</span>
          <p>++374 33 01 00 12</p>
        </li>
        <li className=" flex items-center gap-x-2">
          <span>Phone:</span>
          <p>++374 33 01 00 12</p>
        </li>
      </ul>
      <div className=" flex items-center gap-4 mt-4">
        <button
          className=" px-4 py-2 text-white bg-green-500"
          onClick={handleOpenAdminModal}
        >
          Խմբագրել
        </button>
        <button className=" px-4 py-2 text-white bg-red-500">Ջնջել</button>
      </div>
    </div>
  );
};

export default AdminContactBox;
