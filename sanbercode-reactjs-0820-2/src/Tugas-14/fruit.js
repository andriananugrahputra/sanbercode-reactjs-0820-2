import React from "react";
import { FruitProvider } from "./fruitContext";
import FruitTable from "./fruitTable";
import FruitForm from "./fruitForm";

const Fruit = () => {
  return (
    <FruitProvider>
      <FruitTable />
      <FruitForm />
    </FruitProvider>
  );
};

export default Fruit;
