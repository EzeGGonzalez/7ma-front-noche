import React from 'react';
import Bienvenida from './components/Bienvenida';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      nombre: 'Ada'
    }
  }

  render () {
    return <Bienvenida nombre={this.state.nombre} />;
  }
}

// const App = () => {
//   return <Bienvenida nombre="Ada" />;
// }


export default App;