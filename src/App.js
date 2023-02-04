import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.scss'
import Nav from "./components/partials/Nav";
import Footer from "./components/partials/Footer";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserDetails from "./components/UserDetails";

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/user-details/:id'} element={<UserDetails/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
