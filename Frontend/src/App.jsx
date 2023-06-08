import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage } from './Routes.js';
import { toast, ToastContainer } from 'react-toastify';
import { server } from './server';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Store from "./redux/store.js"
import { loadUser } from './redux/actions/user.js';

const App = () => {
  useEffect(() => {
	Store.dispatch(loadUser)
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/activation" element={<ActivationPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<LoginPage />} /> */}
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
