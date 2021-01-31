import './index.css';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginContainer from './components/LoginContainer';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';

let reRender = (state) => {
    ReactDOM.render(
        <CookiesProvider>
            <BrowserRouter>
                <Provider store={store}>
                    <Route path='/login' render={() => <LoginContainer />}/>
                    <Route exact path="/"
                           render={() => <App state={state.state} dispatch={store.dispatch.bind(store)} />}
                    />
                </Provider>
            </BrowserRouter>
        </CookiesProvider>, document.getElementById('root'));
};

reRender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRender(state)
});
