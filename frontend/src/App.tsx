import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes, useLocation} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PathDoesNotExist from "./components/ErrorPages/PathDoesNotExist";
import './static/styles.css'

// Ant design:
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar";
import Gallery from "./components/gallery/Gallery";
import NftDetails from "./components/gallery/NftDetails";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LoginForm from "./components/LoginForm";
import { RequireAuth } from 'react-auth-kit'
import Protected from "./components/Protected";
import LogoutForm from "./components/LogoutForm";
import AuthenticatedRoute from "./api/AuthenticatedRoute";



function App() {


    return (
        <>
            <Navbar selectedKey={"landingPage"}/>
            <main>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/landingPage" element={<LandingPage/>}/>
                        <Route path="/gallery" element={<Gallery/>}>
                        </Route>
                        <Route path="/gallery/id/:nftId"
                               element={<NftDetails/>}/>
                        <Route path="*" element={<PathDoesNotExist/>}/>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/logout" element={<LogoutForm/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/protected" element={
                            <AuthenticatedRoute>
                                <Protected/>
                            </AuthenticatedRoute>
                        }/>
                    </Routes>

            </main>
            <ToastContainer/>
        </>
    );
}

export default App;
