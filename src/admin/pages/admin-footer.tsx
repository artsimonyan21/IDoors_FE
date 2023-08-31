const AdminFooter = () => {
  return (
    <section className=" p-10 pt-0 flex items-center flex-col">
      <header>
        <h2>Կոնտակտ ինֆո</h2>
      </header>
      <form className=" w-full md:sticky flex items-center flex-wrap gap-4 top-10 py-4 z-30 bg-light-1">
        <div className=" flex grow h-12">
          <input
            type="email"
            id={`title`}
            placeholder="Էլ․Հասցե"
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
        </div>
        <div className=" flex grow h-12">
          <input
            type="text"
            id={`desc`}
            placeholder="Հասցե"
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
        </div>
        <div className=" flex grow h-12">
          <input
            type="tel"
            placeholder="Հեռախոսահամար"
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
        </div>
        <div className=" flex grow h-12">
          <button className=" w-full bg-yellow-500 text-white px-4 h-full">Ավելացնել</button>
        </div>
      </form>
    </section>
  );
};

export default AdminFooter;
