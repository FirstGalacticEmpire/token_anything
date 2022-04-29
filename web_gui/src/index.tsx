// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';
// import "./components/static/styles.css"
// // import {transitions, positions, Provider as AlertProvider} from 'react-alert'
// // import AlertTemplate from "react-alert-template-basic";
// import {QueryClient, QueryClientProvider} from 'react-query'
//
// const queryClient = new QueryClient()
//
// // const options = {
// //     position: positions.BOTTOM_CENTER,
// //     timeout: 5000,
// //     offset: '30px',
// //     transition: transitions.SCALE
// // }
//
// //I don't if alertprovider should otaczac app w index todo
// ReactDOM.render(
//     <BrowserRouter>
//         <QueryClientProvider client={queryClient}>
//             {/*<AlertProvider template={AlertTemplate} {...options}>*/}
//             <App/>
//             {/*</AlertProvider>*/}
//         </QueryClientProvider>
//     </BrowserRouter>,
//     document.getElementById('root')
// );
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/animated.css";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/elegant-icons/style.css';
// import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './assets/style.scss';
import './assets/style_grey.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

//redux store
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
