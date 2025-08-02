import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dera from './pages/Dera.jsx';
import Login from './pages/LogIn.jsx';
import Message from "./pages/Message.jsx";
import Message2 from "./pages/Message2.jsx";



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dera />}/>
            <Route path="/yooo" element={<Message />}/>
            <Route path="/lol" element={<Message2 />}/>

        </Routes>
    );
};

export default Router;
