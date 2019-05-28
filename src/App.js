import React from 'react';
import './App.css';
import ConnectMovie from './component/Movielist';
import {Provider} from 'react-redux'
import {store} from './store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <ConnectMovie /> 
      </Provider>
    </div>
  );
}

export default App;
