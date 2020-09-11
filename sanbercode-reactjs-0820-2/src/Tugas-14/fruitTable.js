import React, { useContext } from "react";
import { FruitContext } from "./fruitContext";
import axios from "axios";

const FruitTable = () => {
  const [dataHarga, setDataHarga, , setInput] = useContext(FruitContext);

  const deleteItem = (event) => {
    const idBuah = parseInt(event.target.value);
    const newData = dataHarga.filter((x) => x.id !== idBuah);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then((res) => {});
    setDataHarga(newData);
  };

  const editItem = (event) => {
    const idBuah = parseInt(event.target.value);
    const buah = dataHarga.find((el) => el.id === idBuah);

    setInput({
      name: buah.name,
      price: buah.price,
      weight: buah.weight,
      id: idBuah,
    });
  };

  return (
    <div>
      <h1>Tabel Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataHarga !== null &&
            dataHarga.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.weight / 1000} kg</td>
                  <td>
                    <button
                      value={item.id}
                      className="margin-right"
                      onClick={editItem}
                    >
                      Edit
                    </button>
                    <button value={item.id} onClick={deleteItem}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default FruitTable;
