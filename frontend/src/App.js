import React, { Suspense } from 'react';
import logo from './logo.svg';
import "react-router-dom";
import './App.css';
import {Login} from "./component/login/Login";
import {Main} from "./component/main/Main";
import {Profile} from "./component/profile/Profile";
import {Evaluation} from "./component/evaluation/Evaluation";
import {Route, Routes, Navigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function App() {
    const { t } = useTranslation();
  return (
      <div className="App">
        <header className="App-header">
          <img style={{scale:"0.45"}} src={require('./image/img.png')} alt="Logo" />
          <h2>{t('Human Resource Application')}</h2>
        </header>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Navigate to="/main" />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/main" element={<Main/>} />
              <Route path="/main/evaluation" element={<Evaluation/>} />
            </Routes>
          </Suspense>
        </div>
      </div>
  );
}

export default App;
