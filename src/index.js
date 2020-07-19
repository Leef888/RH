import './index.css';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

let reRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <Route path='/login' component={Login} />
                <App state={state.state} dispatch={store.dispatch.bind(store)} />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

reRender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRender(state)
});
