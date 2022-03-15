import {Routes, Route,} from "react-router-dom";
import Login from "./components/Login";
import Hub from "./components/Hub";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNavbar";

function App() {
    return (
        <div>
            <MyNavbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Hub/>}/>
                    <Route path="/login/" element={<Login/>}/>
                    <Route path="/hub/" element={<Hub/>}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;
