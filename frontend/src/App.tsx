import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes, useLocation} from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import PathDoesNotExist from "./components/ErrorPages/PathDoesNotExist";
import './static/styles.css'

// Ant design:
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar";
import Gallery from "./components/gallery/Gallery";
import NftDetails from "./components/gallery/NftDetails";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AuthorDetails from "./components/gallery/AuthorDetails";
import CreateOptions from "./components/creating/CreateOptions";
import CreateCrypto from "./components/creating/CreateCrypto";
import CreateObject from "./components/creating/CreateObject";
import CreatePapers from "./components/creating/CreatePapers";


function App() {


    return (
        <>
            <Navbar selectedKey={"landingPage"}/>
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/landingPage" element={<LandingPage/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/gallery/id/:nftId"
                           element={<NftDetails />}/>
                    <Route path="*" element={<PathDoesNotExist/>}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/register" element={<RegisterPage />}/>
                    <Route path="/author/id/:authorID" element={<AuthorDetails/>} />
                    <Route path="/options" element={<CreateOptions />} />
                    <Route path="/create-crypto" element={<CreateCrypto />} />
                    <Route path="/create-object" element={<CreateObject />}/>
                    <Route path="/create-papers" element={<CreatePapers/>} />


                </Routes>
            </main>
            <ToastContainer/>
        </>
    );
}

export default App;
