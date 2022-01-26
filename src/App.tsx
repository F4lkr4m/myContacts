import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import store from './Store/Store';
import { constants } from './Utils/Constants';
import HomeView from './Views/HomeView/HomeView';
import SignView from './Views/SignView/SignView';

export const userContext = React.createContext({auth: false, username: ''});

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route 
          path={constants.appPaths.sign} 
          element={<SignView />}
        />
        <Route 
          path={constants.appPaths.home} 
          element={<HomeView />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
