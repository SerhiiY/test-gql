import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import * as serviceWorker from './services/serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import store from "./redux/store"
import { Provider } from "react-redux";
import client from "./gql/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.register();
