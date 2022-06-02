import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Redirect,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import About from "./components/About";
// import ContactUs component
import Support from "./components/Support";


import NavBar from "./components/NavBar";
import Login from "./components/Login";


function App() {
    return (
        <>
        
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <NavBar />
                {/* <Switch> */}
                <Routes>
                    {/* This route is for home component 
            with exact path "/", in component props 
            we passes the imported component*/}
                    <Route exact path="/" element={<Home />} />

                    {/* This route is for about component 
            with exact path "/about", in component 
            props we passes the imported component*/}
                    <Route path="/about" element={<About />} />

                    {/* This route is for contactus component
            with exact path "/contactus", in 
            component props we passes the imported component*/}
                    <Route path="/support" element={<Support />} />

                    <Route path="/login" element={<Login />} />
                    {/* If any route mismatches the upper 
            route endpoints then, redirect triggers 
            and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    {/* </Switch> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;