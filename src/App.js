import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: true,
      hasTrunfo: true,
      isSaveButtonDisabled: false,
    };
    // this.onInputChange = this.onInputChange.bind(this);
  }

  truCard = (event) => {
    if (event === 'cardTrunfo') {
      this.setState({ cardTrunfo: !this.cardTrunfo });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'cardTrunfo') {
      this.truCard(name);
    } else {
      this.setState({
        [name]: value,
      }, () => {
        const { cardName, cardDescription, cardImage, cardRare, cardAttr1,
          cardAttr2, cardAttr3 } = this.state;

        const noventa = 90;
        const total = 210;

        const areaTex = cardName.length > 0 && cardDescription.length > 0
         && cardImage.length > 0 && cardRare.length > 0;

        const cards = (Number(cardAttr1) <= noventa && Number(cardAttr1) >= 0)
         && (Number(cardAttr2) <= noventa && Number(cardAttr2) >= 0)
         && (Number(cardAttr3) <= noventa && Number(cardAttr3) >= 0);

        const soma = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= total);

        const resul = areaTex && cards && soma;

        this.setState({ isSaveButtonDisabled: resul });
      });
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onSaveButtonClick, hasTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          state={ this.state }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ !isSaveButtonDisabled }
          // hasTrunfo={ this.hasTrunfo }
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
        />
      </div>
    );
  }
}

export default App;
