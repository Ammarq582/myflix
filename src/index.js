import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './contexts/data.context';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './contexts/search.context';
import { TvProvider } from './contexts/tv.context';
import { MovieProvider } from './contexts/movie.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <TvProvider>
            <DataProvider>
              <SearchProvider>
                <App />
              </SearchProvider>
            </DataProvider>
          </TvProvider>      
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
