import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dera from './pages/Dera.jsx';
import Login from './pages/LogIn.jsx';



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dera />}/>

        </Routes>
    );
};

export default Router;
