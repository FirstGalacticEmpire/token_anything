import React from 'react';
import Author from './pages/Author';
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import auth from '../core/auth';
import Register from './pages/register';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

const ProtectedRoute = (children: any): any => {
        let location = useLocation();
        const isAuth = auth.getToken() !== null;

        return (
            isAuth ? children : <Navigate to="/login" state={{from: location}} replace/>
        )
    }
;
const app = () => (
    <div className="wraper">
        <GlobalStyles/>
        <Header className={undefined}/>
        <Routes>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
            <Route path="/register" element={<Register></Register>}/>
            <Route path="/Author">
                <Route
                    path=":authorId"
                    element={
                        <ProtectedRoute>
                            <Author authorId={undefined}></Author>
                        </ProtectedRoute>
                    }
                />
            </Route>
            {/*<Route path="/Profile">*/}
            {/*    <Route*/}
            {/*        path=":authorId"*/}
            {/*        element={*/}
            {/*            <ProtectedRoute>*/}
            {/*                /!*<Profile/>*!/*/}
            {/*            </ProtectedRoute>*/}
            {/*        }*/}
            {/*    />*/}
            {/*</Route>*/}
            <Route path="/home" element={<Home/>}/>
        </Routes>
        <ScrollToTopBtn/>
    </div>
);

export default app;
