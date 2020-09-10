import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelBuahAxios = () => {
  const [dataHarga, setDataHarga] = useState(null);
  const [input, setInput] = useState({
    name: "",
    price: "",
    weight: "",
    id: null,
  });

  useEffect(() => {
    if (dataHarga === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataHarga(res.data);
        });
    }
  }, [dataHarga]);

  const changeInput = (event) => {
    let value = event.target.value;
    setInput({
      ...input,
      [event.target.name]: value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (input.id === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, {
          name: input.name,
          price: input.price,
          weight: parseInt(input.weight),
        })
        .then((res) => {
          const data = res.data;
          setDataHarga([
            ...dataHarga,
            {
              id: data.id,
              name: data.name,
              price: data.price,
              weight: data.weight,
            },
          ]);
          setInput({ name: "", price: "", weight: "", id: null });
        });
    } else {
      axios
        .put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {
          name: input.name,
          price: input.price,
          weight: parseInt(input.weight),
        })
        .then((res) => {
          const newDataHarga = dataHarga.map((el) => {
            if (el.id === input.id) {
              el.name = input.name;
              el.price = input.price;
              el.weight = input.weight;
            }
            return el;
          });
          setDataHarga(newDataHarga);
          setInput({ name: "", price: "", weight: "", id: null });
        });
    }
  };

  const deleteItem = (event) => {
    const idBuah = parseInt(event.target.value);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then((res) => {
        const newData = dataHarga.filter((x) => x.id !== idBuah);
        setDataHarga(newData);
      });
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
      <div>
        <form onSubmit={submitForm}>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Nama</strong>
                </td>
                <td>
                  <input
                    name="name"
                    id="nama"
                    type="text"
                    value={input.name}
                    onChange={changeInput}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Harga</strong>
                </td>
                <td>
                  <input
                    name="price"
                    id="harga"
                    type="number"
                    value={input.price}
                    onChange={changeInput}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Berat</strong>
                </td>
                <td>
                  <input
                    name="weight"
                    id="berat"
                    type="number"
                    value={input.weight}
                    onChange={changeInput}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button>Save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default TabelBuahAxios;
