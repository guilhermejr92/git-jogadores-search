import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css';

import api from './services/api';


function App() {

  const [input, setInput] = useState('')
  const [Fut, setFut] = useState({});


  async function handleSearch(){
    // yuri-alberto/json/

    if(input === ''){
      alert("Digite algum nome!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      setFut(response.data)
      setInput("");

    }catch{
      alert("erro na busca");
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador de Jogadores</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite o nome do jogador..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>


      {Object.keys(Fut).length > 0 && (
        <main className="main">
          <h2>Fut: {Fut.Fut}</h2>

          <span>{Fut.Posição}</span>
          <span>{Fut.Idade}</span>
          <span>{Fut.Clube}</span>
          <span>{Fut.Titulos}</span>

      </main>
      )}
      
    </div>
  );
}

export default App;
