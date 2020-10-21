import React from 'react';
import Main from './Main';
import Footer from "./Footer";
import Button from './Button'

class App extends React.Component {
  render() {
    return (
      <>
        <Button />
        <Main/>
        <Footer />
      </>
    );
  }
}

export default App;
