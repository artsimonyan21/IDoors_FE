import FirstArrangement from "@/pages/products/components/first-arrangement";
import SecondArrangement from "@/pages/products/components/second-arrangement";
import { useMainContext } from "@/providers/main-provider";
import React, { ReactNode, useEffect, useState } from "react";

interface ProductsProps {
  selectedComponent: JSX.Element | React.ReactNode;
  handleSelectComponent: (componentType: string) => void;
  isSearchbarOpen: boolean;
}

const productsHoc = (Component: React.FC<ProductsProps>) => {
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

  return () => {
    const { isSearchbarOpen } = useMainContext();
    const [localStorageItem, setLocalStorageItem] = useState<string>(
      () => localStorage.getItem("type") || "first-arrangement"
    );
    const [type, setType] = useState<string>(localStorageItem);
    const [selectedComponent, setSelectedComponent] = useState<JSX.Element | ReactNode | null>(
      null
    );

    const handleSelectComponent = (componentType: string) => {
      localStorage.setItem("type", componentType);
      setType(() => componentType);
    };

    useEffect(() => {
      const itemInLocalStorage = localStorage.getItem("type");
      if (!itemInLocalStorage) {
        localStorage.setItem("type", localStorageItem);
      } else {
        setLocalStorageItem(itemInLocalStorage);
      }
    }, []);

    useEffect(() => {
      const selected = components?.find(item => (item?.type === type ? item?.component : null));
      setSelectedComponent(selected?.component || null);
    }, [type]);

    return (
      <Component
        selectedComponent={selectedComponent}
        handleSelectComponent={handleSelectComponent}
        isSearchbarOpen={isSearchbarOpen}
      />
    );
  };
};

export default productsHoc;
