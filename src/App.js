import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setClientList(response.data);
    });
  }, []);

  const submitbtn = () => {
    Axios.post('http://localhost:3001/api/insert', {
      nom: nom,
      tel: tel,
    }).then(() => {
      alert("Successful insert");
    });
  };

  return (
    <div className="App">
      <h1>Crud application</h1>

      <div className='form'>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom :</label>
          <input type="text" className="form-control" id="nom" placeholder="Rakoto" onChange={(e) => {
            setNom(e.target.value)
          }} />
        </div>
        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Téléphone :</label>
          <input type="numbur" className="form-control" id="tel" placeholder="0320000000" onChange={(e) => {
            setTel(e.target.value)
          }} />
        </div>
        <button className="btn btn-primary" onClick={submitbtn}>Envoyer</button>

        {clientList.map((val) => {
          return (
            <h1>
              Nom: {val.nom} | Téléphone: {val.tel}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
