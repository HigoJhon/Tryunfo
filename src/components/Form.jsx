import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>ADICIONE NOVA CARTA</h1>
        <form className="form">
          <label htmlFor="name">
            Nome
            <br />
            <input type="text" id="name" data-testid="name-input" />
          </label>
          <br />
          <label htmlFor="descricao">
            Descrição
            <br />
            <textarea name="descricao" data-testid="description-input" />
          </label>
          <br />
          <label htmlFor="forca">
            Força
            <input type="number" id="forca" data-testid="attr1-input" />
          </label>
          <br />
          <label htmlFor="velocidade">
            Velocidade
            <input type="number" id="velocidade" data-testid="attr2-input" />
          </label>
          <br />
          <label htmlFor="peso">
            Peso
            <input type="number" id="peso" data-testid="attr3-input" />
          </label>
          <br />
          <label htmlFor="imagem">
            Imagem
            <input type="text" id="imagem" data-testid="image-input" />
          </label>
          <br />
          <label htmlFor="raridade">
            Raridade
            <select name="raridade" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="check">
            <input type="checkBox" id="check" data-testid="trunfo-input" />
            Super Trunfo
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
