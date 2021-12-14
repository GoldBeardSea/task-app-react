import React from 'react';

import Header from './header.js';
import Main from './main.js';
// import Footer from 'footer.js';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        {/* <Footer /> */}
      </>
    )
  }
}

export default App;