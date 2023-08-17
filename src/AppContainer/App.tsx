import Router from "../Router";
import MainLayout from "../layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="global_wrapper">
      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
