import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./pages/Home";
import Applied from "./pages/Applied"
import Analytical from "./pages/Analytical"
import Community from "./pages/Community"
import Profile from "./pages/Profile"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Page404 from './pages/Page404'
import "./index.scss";
import Dashboard from "./pages/Dashboard";


import store from "./redux/store";
import {Provider} from "react-redux";


const App = () => (
  <Provider store={store}>
  <div className=" flex items-center justify-center min-h-screen">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Applied" element={<Applied/>}/>
        <Route path="/Analytical" element={<Analytical/>}/>
        <Route path="/Community" element={<Community/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path='*'  element = {<Page404/>}/>
      </Routes>
    </Router>
   
  </div>
  </Provider>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)