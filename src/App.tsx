import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { createBrowserHistory } from 'history';
//import { useDispatch } from 'react-redux';

import './App.css';
import { FormTemplate } from './components/templates/FormTemplate';
import { BookPage } from './components/pages/BookPage/BookPage';
import { HomePage } from './components/pages/HomePage/HomePage';
import { FavoritesPage } from './components/pages/FavoritesPage/FavoritesPage';

//import { Button } from './components/atoms/Button';
//import { ReactComponent as FavoriteIcon } from './assets/icons/favoritesIcon.svg';
//import { ColorService } from './services';
// import { Input } from './components/atoms/Input';
// import { Tabs } from './components/atoms/Tabs';
// import { Title } from './components/atoms/Title';
//import { Header } from './components/molecules/Header';

function App() {
  /*const onChange = async (event: ChangeEvent<HTMLInputElement>, field: string) => {
    console.log({ event, field });
    setName(event.target.value);
  };*/

  //const [name, setName] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <div></div>
              <FormTemplate title="NEW RELEASES BOOKS">
                <HomePage />
              </FormTemplate>
            }></Route>
          <Route
            path="/favorites"
            element={
              // <div></div>
              <FormTemplate title="FAVORITES">
                <FavoritesPage />
              </FormTemplate>
            }></Route>
          <Route
            path="/books/:bookID"
            element={
              // <div></div>
              <BookPage />
            }></Route>
          <Route
            path="/new"
            element={
              // <div></div>
              <FormTemplate title="NEW RELEASES BOOKS">{'<HomePage />'}</FormTemplate>
            }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// const FavoriteIconStyled = styled(FavoriteIcon)`
//   path {
//     fill: ${ColorService.SECONDARY};
//   }
// `;

export default App;
