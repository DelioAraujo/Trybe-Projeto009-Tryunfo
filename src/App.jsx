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

    const minimo = 0;
    const maximo = 90;
    const maximo2 = 210;
    const numerocardAttr1 = Number(cardAttr1);
    const numerocardAttr2 = Number(cardAttr2);
    const numerocardAttr3 = Number(cardAttr3);
    if (
      cardName !== ''
      && cardImage !== ''
      && cardRare !== ''
      && cardDescription !== ''
      && numerocardAttr1 >= minimo
      && numerocardAttr1 <= maximo
      && numerocardAttr2 >= minimo
      && numerocardAttr2 <= maximo
      && numerocardAttr3 >= minimo
      && numerocardAttr3 <= maximo
      && (numerocardAttr1 + numerocardAttr2 + numerocardAttr3) <= maximo2
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
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
          onSaveButtonClick={ onSaveButtonClick }

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
