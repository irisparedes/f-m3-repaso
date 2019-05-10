import React, { Component } from 'react';
import Ship from './components/Ship';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ships: []
    };
    this.getData();
  }

  getData() {
    fetch(
      'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json'
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ ships: data.palettes });
      });
  }

  render() {
    const { ships } = this.state;

    return (
      <div className="App">
        <ul className="Ships">
          {ships.map((item, ind) => (
            <Ship key={ind} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
