import React, { FormEvent } from 'react';

function App() {

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    alert('Legal, você clicou em mim!!!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste de cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome</label>
            <input />
          </div>
          <div>
            <label>Sobrenome</label>
            <input />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
