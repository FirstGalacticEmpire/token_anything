import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes, useLocation} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PathDoesNotExist from "./components/ErrorPages/PathDoesNotExist";

// Ant design:
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar";
import Gallery from "./components/gallery/Gallery";


function App() {


    return (
        <>
            <Navbar selectedKey={"landingPage"}/>
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/landingPage" element={<LandingPage/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="*" element={<PathDoesNotExist/>}/>
                </Routes>
            </main>
            <ToastContainer/>
        </>
    );
}

export default App;
