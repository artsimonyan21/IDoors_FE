import { useAppStore } from "@/store/app-store";
import AdminAboutBox from "../components/boxes/admin-about-box";
import AdminModal from "../components/modals/admin-modal";
import AdminAboutModalForm from "../components/modals/modal-forms/admin-about-modal-form";
import PageTitle from "../components/page-title";

const AdminAbout = () => {
  const { isModalOpen, isEditModalOpen, onOpenModal } = useAppStore(
    (store) => store
  );

  return (
    <>
      {isModalOpen ? (
        <AdminModal title="Ավելացնել" body={<AdminAboutModalForm />} />
      ) : null}
      {isEditModalOpen ? (
        <AdminModal title="Խմբագրել" body={<AdminAboutModalForm />} />
      ) : null}
      <section className=" p-10 pt-0 flex items-center flex-col">
        <header className=" my-10">
          <PageTitle>մեր մասին</PageTitle>
        </header>
        <div className=" w-full sticky top-10 py-4 z-30 bg-light-1">
          <button
            className=" w-full h-12 bg-yellow-500 text-white px-4"
            onClick={onOpenModal}
          >
            Ավելացնել
          </button>
        </div>
        <div className=" w-full grid md:grid-cols-2 gap-4">
          {[...Array(9).keys()].map((_, index: number) => (
            <AdminAboutBox key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AdminAbout;
