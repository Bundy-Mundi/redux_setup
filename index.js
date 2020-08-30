import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configurePersistedAppStore from "./_redux/_store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

const { store, persistor } = configurePersistedAppStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
  console.log("MOUNTING...")
}

ReactDOM.render(
  <PersistGate
    loading={null}
    onBeforeLift={onBeforeLift}
    persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>,
  document.getElementById('root')
);