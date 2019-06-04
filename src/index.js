import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import  { Provider } from 'react-redux'
import store from './store';
const App =(
    <Provider store = {store}>
       <MovieList />
        </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

