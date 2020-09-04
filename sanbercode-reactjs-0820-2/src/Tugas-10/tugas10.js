import React from 'react';
import './tugas10.css';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class TabelHargaBuah extends React.Component {
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
                        </tr>
                    </thead>
                    <tbody>
                        {dataHargaBuah.map(el =>{
                            return (
                                <tr>
                                    <td>{el.nama}</td>
                                    <td>{el.harga}</td>
                                    <td>{el.berat}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TabelHargaBuah;