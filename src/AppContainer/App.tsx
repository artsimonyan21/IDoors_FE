import Products from "../Pages/Products";
// import About from "../Pages/About";
// import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";

const App = () => {
  return (
    <div className="global_wrapper">
      <MainLayout>
        {/* <Home /> */}
        {/* <About /> */}
        <Products />
      </MainLayout>
    </div>
  );
};

export default App;
