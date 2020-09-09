import React, { Component } from "react";

class TabelHargaBuah2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      inputNama: "",
      inputHarga: null,
      inputBerat: null,
      index: -1,
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    var index = this.state.index;
    var inputAll = {
      nama: this.state.inputNama,
      harga: this.state.inputHarga,
      berat: this.state.inputBerat,
    };
    if (index === -1) {
      this.setState({
        dataHargaBuah: [...this.state.dataHargaBuah, inputAll],
      });
    } else {
      var updatedataHargaBuah = this.state.dataHargaBuah;
      updatedataHargaBuah[index] = inputAll;
      this.setState({
        dataHargaBuah: [...updatedataHargaBuah],
      });
    }

    this.setState({
      inputNama: "",
      inputHarga: "",
      inputBerat: "",
      index: -1,
    });
    inputAll = {};
  };

  changeInputName = (event) => {
    var value = event.target.value;
    this.setState({ inputNama: value });
  };

  changeInputHarga = (event) => {
    var value = event.target.value;
    this.setState({ inputHarga: value });
  };

  changeInputBerat = (event) => {
    var value = event.target.value;
    this.setState({ inputBerat: value });
  };

  editButton = (event) => {
    var index = event.target.value;
    var dataHargaBuah = this.state.dataHargaBuah[index];
    this.setState({
      inputNama: dataHargaBuah.nama,
      inputHarga: dataHargaBuah.harga,
      inputBerat: dataHargaBuah.berat,
      index: index,
    });
  };

  deleteButton = (event) => {
    var index = event.target.value;
    var updatedataHargaBuah = this.state.dataHargaBuah;
    updatedataHargaBuah.splice(index, 1);
    this.setState({
      index: -1,
    });
  };

  render() {
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
            {this.state.dataHargaBuah.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.nama}</td>
                  <td>{el.harga}</td>
                  <td>{el.berat / 1000} kg</td>
                  <td>
                    <button
                      value={index}
                      onClick={this.editButton}
                      style={{ marginLeft: "5%", marginRight: "5%" }}
                    >
                      Edit
                    </button>
                    <button value={index} onClick={this.deleteButton}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <div>
          <form onSubmit={this.submitForm}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Nama</strong>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={this.state.inputNama}
                      onChange={this.changeInputName}
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
                      type="number"
                      value={this.state.inputHarga}
                      onChange={this.changeInputHarga}
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
                      type="number"
                      value={this.state.inputBerat}
                      onChange={this.changeInputBerat}
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
  }
}
export default TabelHargaBuah2;
