import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { constants } from './Utils/Constants';
import HomeView from './Views/HomeView/HomeView';
import SignView from './Views/SignView/SignView';

function App() {
  return (
    <Routes>
      <Route path={constants.appPaths.sign} element={<SignView />} />
      <Route path={constants.appPaths.home} element={<HomeView />} />
    </Routes>
  );
}

export default App;
