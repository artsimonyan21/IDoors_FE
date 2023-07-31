import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";

const App = () => {
  return (
    <div className="global_wrapper">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
};

export default App;
