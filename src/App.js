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
      cardTrunfo: false,
      // hasTrunfo: false,
      // isSaveButtonDisabled: false,
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
      });
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form state={ this.state } onInputChange={ this.onInputChange } />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
