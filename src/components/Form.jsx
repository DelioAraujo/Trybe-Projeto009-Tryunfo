import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">Nome:</label>
        <input type="text" id="name-input" data-testid="name-input" />

        <label htmlFor="description-input">Descrição:</label>
        <textarea id="description-input" data-testid="description-input" />

        <label htmlFor="attr1-input">Atributo 1:</label>
        <input type="number" id="attr1-input" data-testid="attr1-input" />

        <label htmlFor="attr2-input">Atributo 2:</label>
        <input type="number" id="attr2-input" data-testid="attr2-input" />

        <label htmlFor="attr3-input">Atributo 3:</label>
        <input type="number" id="attr3-input" data-testid="attr3-input" />

        <label htmlFor="image-input">Imagem:</label>
        <input type="text" id="image-input" data-testid="image-input" />

        <label htmlFor="rare-input">Raridade:</label>
        <select id="rare-input" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito-raro">Muito raro</option>
        </select>

        <label htmlFor="trunfo-input">Super Trunfo:</label>
        <input type="checkbox" id="trunfo-input" data-testid="trunfo-input" />

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
