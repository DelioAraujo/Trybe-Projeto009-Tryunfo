import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name-input">Nome:</label>
        <input
          type="text"
          id="name-input"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="description-input">Descrição:</label>
        <textarea
          id="description-input"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <label htmlFor="attr1-input">Atributo 1:</label>
        <input
          type="number"
          id="attr1-input"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <label htmlFor="attr2-input">Atributo 2:</label>
        <input
          type="number"
          id="attr2-input"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <label htmlFor="attr3-input">Atributo 3:</label>
        <input
          type="number"
          id="attr3-input"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <label htmlFor="image-input">Imagem:</label>
        <input
          type="text"
          id="image-input"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <label htmlFor="rare-input">Raridade:</label>
        <select
          id="rare-input"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <label htmlFor="trunfo-input">Super Trunfo:</label>
        <input
          type="checkbox"
          id="trunfo-input"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
