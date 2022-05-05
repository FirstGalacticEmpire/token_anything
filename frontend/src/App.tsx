import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes, useLocation} from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import home from "./components/pages/home"
import PathDoesNotExist from "./components/ErrorPages/PathDoesNotExist";
import './static/styles.css'

// Ant design:
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar";
import Gallery from "./components/gallery/Gallery";
import NftDetails from "./components/gallery/NftDetails";
import Home from "./components/pages/Home";
import Header from "./components/menu/header"


function App() {


    return (
        <>
            <Navbar selectedKey={"home"}/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/gallery/id/:nftId"
                           element={<NftDetails />}/>
                    <Route path="*" element={<PathDoesNotExist/>}/>

                </Routes>
            </main>
            <ToastContainer/>
        </>
    );
}

export default App;
