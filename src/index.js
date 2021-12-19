import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./routes/Login";
import Campaign from "./routes/Campaign";
import Analytics from "./routes/Analytics";

ReactDom.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="campaign" element={<Campaign />} />
        </Routes>
    </BrowserRouter>, 
    document.getElementById('root'));

