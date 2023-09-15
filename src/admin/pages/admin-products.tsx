import { useAppStore } from "@/store/app-store";
import AdminProductBox from "../components/boxes/admin-product-box";
import AdminModal from "../components/modals/admin-modal";
import AdminProductsModalForm from "../components/modals/modal-forms/admin-products-modal-form";
import PageTitle from "../components/page-title";

const AdminProducts = () => {
  const { isModalOpen, isEditModalOpen, onOpenModal } = useAppStore(
    (store) => store
  );

  return (
    <>
      {isEditModalOpen ? (
        <AdminModal title="Խմբագրել" body={<AdminProductsModalForm />} />
      ) : null}
      {isModalOpen ? (
        <AdminModal title="Ավելացնել" body={<AdminProductsModalForm />} />
      ) : null}
      <section className=" p-10 pt-0 flex items-center flex-col">
        <header className=" my-10">
          <PageTitle>տեսականի</PageTitle>
        </header>
        <div className=" w-full md:sticky top-10 py-4 z-30 bg-light-1">
          <button
            className=" w-full h-12 bg-yellow-500 text-white px-4"
            onClick={onOpenModal}
          >
            Ավելացնել
          </button>
        </div>
        <div className=" w-full grid md:grid-cols-2 gap-4">
          {[...Array(9).keys()].map((_, index: number) => (
            <AdminProductBox key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AdminProducts;
