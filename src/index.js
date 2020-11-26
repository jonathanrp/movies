import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import HomeContainer from './pages/home';
import reportWebVitals from './reportWebVitals';
import movies from './components/Movies/reducer';
import GlobalStyle from './globalStyles';

//Thunk middleware
//composeWithDevTools sends data to Chrome Dev Tools
const enhancer = composeWithDevTools(applyMiddleware(thunk, promise));

// Reducers 
const appReducer = combineReducers({
  movies,
});

// Creates store, sends the reducer and applies the enhancer middleware
const store = createStore(appReducer, {}, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <HomeContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
