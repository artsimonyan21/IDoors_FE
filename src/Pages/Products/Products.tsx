import Pagination from "@/components/pagination";
import RecomendedDoors from "@/components/recomended-doors";
import Button from "@/components/ui/button";
import { productsLayoutLinks } from "@/constants/contsants";
import { ReactNode, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import FirstArrangement from "./components/first-arrangement";
import SecondArrangement from "./components/second-arrangement";

interface ComponentsProps {
  type: string;
  component: () => JSX.Element | ReactNode;
}

const components: ComponentsProps[] = [
  {
    type: "first-arrangement",
    component: FirstArrangement
  },
  {
    type: "second-arrangement",
    component: SecondArrangement
  }
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element | ReactNode | null>(null);
  const type = searchParams.get("type") as string;

  useEffect(() => {
    if (!type) {
      setSearchParams("type=first-arrangement");
    } else {
      setSearchParams("type=" + type);
    }
  }, [type]);

  useEffect(() => {
    const selected = components?.find(item => (item?.type === type ? item?.component : null));
    setSelectedComponent(selected?.component);
  }, [type]);

  return (
    <section className=" w-full h-full flex items-center flex-col pt-[112px] px-10 pb-20">
      <div className=" w-full grid md:grid-cols-[1fr_3fr] gap-10 mb-10">
        <div className=" w-full md:pb-24">
          <div className=" sticky top-[120px] bottom-80 w-full flex items-start flex-col gap-4">
            <h3 className=" font-[EZO-NA] text-7xl text-blue-1 tracking-wider">ՏԵՍականի</h3>
            <Button className=" w-full" icon={true}>
              Մետաղական դռներ
            </Button>
            <Button className=" w-full" icon={true}>
              Մուտքի դռներ
            </Button>
            <Button className=" w-full" icon={true}>
              Սենյակային դռներ
            </Button>
          </div>
        </div>
        <div className=" w-full flex items-center flex-col">
          <header className=" w-full flex items-center justify-end flex-wrap gap-4 py-4">
            <div className=" flex items-center justify-end gap-2">
              {productsLayoutLinks?.map((link, index: number) => (
                <Link
                  key={index}
                  to={link?.route}
                  className={` ${type === link?.value ? "text-blue-1" : "text-gray-1"} text-3xl`}
                >
                  <link.icon />
                </Link>
              ))}
            </div>
          </header>
          <div className=" w-full flex items-center flex-col">
            {type ? selectedComponent : <FirstArrangement />}
            <Pagination />
          </div>
        </div>
      </div>
      <div className=" w-full">
        <RecomendedDoors />
      </div>
    </section>
  );
};

export default Products;
