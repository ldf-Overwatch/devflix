import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll en haut de la page
    }, [pathname]); // Déclenchement lorsqu'on change de route

    return null; // Ce composant n'affiche rien
};

export default ScrollToTop;
