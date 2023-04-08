import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    onSaveButtonClick: '',
    arrayDeCartas: [],
  };

  validacaoBotao = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const MIN_VAL = 0;
    const MAX_VAL = 90;
    const MAX_TOTAL = 210;
    const isNameValid = cardName.trim().length > 0;
    const isImageValid = cardImage.trim().length > 0;
    const isRareValid = cardRare.trim().length > 0;
    const isDescriptionValid = cardDescription.trim().length > 0;
    const isAttr1Valid = Number(cardAttr1) >= MIN_VAL && Number(cardAttr1) <= MAX_VAL;
    const isAttr2Valid = Number(cardAttr2) >= MIN_VAL && Number(cardAttr2) <= MAX_VAL;
    const isAttr3Valid = Number(cardAttr3) >= MIN_VAL && Number(cardAttr3) <= MAX_VAL;
    const isTotalValid = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
    <= MAX_TOTAL;

    this.setState({
      isSaveButtonDisabled: !(
        isNameValid
        && isImageValid
        && isRareValid
        && isDescriptionValid
        && isAttr1Valid
        && isAttr2Valid
        && isAttr3Valid
        && isTotalValid
      ),
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

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
      arrayDeCartas,
    } = this.state;

    const cartaCriada = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      arrayDeCartas: [...arrayDeCartas, cartaCriada],
    });
  };

  onInputChange = (event) => {
    const { target } = event;
    const { value, name, checked } = target;

    if (name === 'cardTrunfo') {
      this.setState({
        [name]: checked,
      }, this.validacaoBotao);
    } else {
      this.setState({
        [name]: value,
      }, this.validacaoBotao);
    }
  };

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
      onSaveButtonClick,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
