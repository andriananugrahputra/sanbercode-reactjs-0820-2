import React from 'react';
import './App.css';

function App() {
  return (
    <div class="div-container">
      <h1>Form Pembelian Buah</h1>
      <div style={{display: 'block', marginBottom: '1em'}}>
        <span>
          Nama Pelanggan
        </span>
        <input style={{display: 'inline-block'}} type="text" name="name" />
      </div>
      <span>
        Daftar Item
      </span>
      <div style={{display: 'inline-block', marginBottom: '1em'}}>
        <input type="checkbox" name="item" />
        <label>Semangka</label><br />
        <input type="checkbox" name="item" />
        <label>Jeruk</label><br />
        <input type="checkbox" name="item" />
        <label>Nanas</label><br />
        <input type="checkbox" name="item" />
        <label>Salak</label><br />
        <input type="checkbox" name="item" />
        <label>Anggur</label><br />
      </div>
      <div>
        <button style={{background: 'white', borderRadius: '25px'}}> 
          <a href="/#" style={{color: 'black', textDecoration: 'none'}}>Kirim</a>
        </button>
      </div>
    </div>
  );
}

export default App;