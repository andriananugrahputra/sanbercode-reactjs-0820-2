import React, { useContext } from "react";
import { FruitContext } from "./fruitContext";
import axios from "axios";

const FruitForm = () => {
  const [dataHarga, setDataHarga, input, setInput] = useContext(FruitContext);

  const changeInput = (event) => {
    let value = event.target.value;
    setInput({
      ...input,
      [event.target.name]: value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();

    const name = input.name;
    const price = input.price;
    const weight = parseInt(input.weight);

    if (input.id === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, {
          name,
          price,
          weight,
        })
        .then((res) => {
          const data = res.data;
          setDataHarga([...dataHarga, { id: data.id, name, price, weight }]);
        });
    } else {
      axios
        .put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {
          name,
          price,
          weight,
        })
        .then((res) => {
          const newDataHarga = dataHarga.find((el) => el.id === input.id);
          newDataHarga.name = name;
          newDataHarga.price = price;
          newDataHarga.weight = weight;
          setDataHarga([...dataHarga]);
        });
    }

    setInput({ name: "", price: "", weight: "", id: null });
  };

  return (
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
  );
};

export default FruitForm;
