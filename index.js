import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Application'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>React movie Search!</h1>
        <App/>
      </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
