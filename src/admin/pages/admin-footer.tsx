import { useAppStore } from "@/store/app-store";
import AdminContactBox from "../components/boxes/admin-contact-box";
import AdminModal from "../components/modals/admin-modal";
import AdminContactModalForm from "../components/modals/modal-forms/admin-contact-modal-form";
import PageTitle from "../components/page-title";

const AdminFooter = () => {
  const { isEditModalOpen, isModalOpen, onOpenModal } = useAppStore(
    (store) => store
  );
  return (
    <>
      {isEditModalOpen ? (
        <AdminModal title="Խմբագրել" body={<AdminContactModalForm />} />
      ) : null}
      {isModalOpen ? (
        <AdminModal title="Ավելացնել" body={<AdminContactModalForm />} />
      ) : null}
      <section className=" p-10 pt-0 flex items-center flex-col">
        <header className=" my-10">
          <PageTitle>Կոնտակտ ինֆո</PageTitle>
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
          <AdminContactBox />
        </div>
      </section>
    </>
  );
};

export default AdminFooter;
