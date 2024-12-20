import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import netflixTheme from "./netflix-theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Expériencenetflix from "./components/Expériencenetflix";
import Formationnetflix from "./components/Formationnetflix"; // Nom correct
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
        <ThemeProvider theme={netflixTheme}>
            <CssBaseline />
            <Router>
                <ScrollToTop />
                <Routes>
                    {/* Route pour la page principale */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                                <Skills />
                                <Expériencenetflix />
                                <Formationnetflix /> {/* Utilisation correcte */}
                                <Footer />
                            </>
                        }
                    />
                    {/* Route pour À Propos */}
                    <Route
                        path="/about"
                        element={
                            <>
                                <Header />
                                <About />
                                <Footer />
                            </>
                        }
                    />
                    {/* Route pour Contact */}
                    <Route
                        path="/contact"
                        element={
                            <>
                                <Header />
                                <Contact />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
