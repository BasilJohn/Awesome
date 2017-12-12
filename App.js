import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Opening from './src/Opening';


export default class App extends React.Component {

  render() {

    const store = configureStore();
    return (
      <Provider store={store}>
        <Opening />
      </Provider>
    );
  }
}

