import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout.tsx';
import Dashboard from './Pages/Dashboard.tsx'
import Statistics from './Pages/Statistics.tsx';
import Users from './Pages/Users.tsx';
import Blog from './Pages/Blog.tsx'
import Messages from './Pages/Messages.tsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard></Dashboard>} />
        <Route path="/Statistics" element={<Statistics></Statistics>} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Messages" element={<Messages />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
