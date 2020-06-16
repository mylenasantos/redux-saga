import React from 'react';
import { Provider } from 'react-redux';
import './ReactotronConfig';
import Main from './pages/index';
import Footer from './components/footer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
