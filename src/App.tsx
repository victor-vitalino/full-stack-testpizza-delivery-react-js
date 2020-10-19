import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./config/ReactotronConfig";
import { store, persistor } from "./store";

import GlobalStyle from "./styles/global";

import Routes from "./routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyle />

          <BrowserRouter>
            <Routes />
            <ToastContainer autoClose={3000} />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
