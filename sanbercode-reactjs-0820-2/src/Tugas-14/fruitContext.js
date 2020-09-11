import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const FruitContext = createContext();

export const FruitProvider = (props) => {
  const [dataHarga, setDataHarga] = useState(null);

  const [input, setInput] = useState({
    name: "",
    price: "",
    weight: "",
    id: null,
  });

  const getData = useEffect(() => {
    if (dataHarga === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataHarga(
            res.data.map((el) => {
              return {
                id: el.id,
                name: el.name,
                price: el.price,
                weight: el.weight,
              };
            })
          );
        });
    }
  }, [dataHarga]);

  return (
    <FruitContext.Provider
      value={[dataHarga, setDataHarga, input, setInput, getData]}
    >
      {props.children}
    </FruitContext.Provider>
  );
};
