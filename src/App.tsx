import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import Router from "./Router";

const App = () => {
  return (
    <Suspense
      fallback={
        <section className=" w-full h-screen flex items-center justify-center">
          <Loading />
        </section>
      }
    >
      <Router />
    </Suspense>
  );
};

export default App;
