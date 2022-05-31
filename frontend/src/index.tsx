import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from 'react-query'
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
//temp todo
import {MetaMaskProvider} from "metamask-react";

import {AuthProvider} from 'react-auth-kit'
import ApiClientProvider from "./api/ApiProvider";
import refreshApi from "./refreshApi";

import '../src/assets/style.css'; ///eee co


const queryClient: QueryClient = new QueryClient()


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider authType={'localstorage'}
                          authName={'_auth'}
                // refresh={refreshApi} todo add refresh
            >
                <ApiClientProvider>
                    <BrowserRouter>
                        <MetaMaskProvider>
                            <App/>
                        </MetaMaskProvider>
                    </BrowserRouter>
                </ApiClientProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
