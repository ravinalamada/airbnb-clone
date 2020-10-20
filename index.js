import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Application';

class Main extends React.Component {
  render() {
    return (
      <main>
        <App/>
      </main>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
