import React from 'react';
import UsersList from './components/UsersList';

class App extends React.Component {
  // STATE
  constructor (props) {
    super(props);

    this.state = {
      usuarios: [
        {
          nombre: 'Ada',
          edad: 27
        },
        {
          nombre: 'Grace',
          edad: 32
        },
        {
          nombre: 'Hedy',
          edad: 35
        }
      ]
    }
  }

  render () {
    return <UsersList users={this.state.usuarios} />;
  }
}

// const App = () => {
//   const usuarios = [{
//       nombre: 'Ada',
//       edad: 27
//     },
//     {
//       nombre: 'Grace',
//       edad: 32
//     },
//     {
//       nombre: 'Hedy',
//       edad: 35
//     }
//   ];

//   return <UsersList users={usuarios} />;
// }


export default App;