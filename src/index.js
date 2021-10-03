import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { store, persistor } from './redux/store';
import 'modern-normalize/modern-normalize.css';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        // loading={
        //   <Loader type="Audio" color="#ffed4f" height={100} width={100} />
        // }
        persistor={persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
