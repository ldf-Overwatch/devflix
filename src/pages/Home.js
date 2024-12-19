import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    // Déclenche l'animation au chargement du composant
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                background: 'linear-gradient(45deg, #2e3b4e, #1a232e)', // Fond dégradé
                backgroundSize: 'cover',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 2s ease-out',
            }}
        >
            {/* Effet des étoiles animées */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    background: 'transparent',
                    pointerEvents: 'none',
                }}
            >
                {/* Étoiles scintillantes */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                        animation: "starfield 10s infinite linear",
                        zIndex: 1,
                    }}
                ></div>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                        animation: "twinkle 1.5s infinite ease-in-out",
                        zIndex: 0,
                    }}
                ></div>
            </Box>

            {/* Texte principal - Animation arrivée de la gauche */}
            <Typography
                variant="h2"
                color="white"
                gutterBottom
                sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)', // Animation d'entrée depuis la gauche
                    transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
            >
                Développer l'innovation, coder l'avenir
            </Typography>

            {/* Texte secondaire - Animation arrivée de la gauche avec un décalage */}
            <Typography
                variant="h5"
                color="white"
                sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)', // Animation d'entrée depuis la gauche
                    transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
                    mb: 4,
                    ml: 0,
                }}
            >
                Développeuse Web Full Stack  Javascript | React | Node
            </Typography>

            {/* Ajout du style des animations */}
            <style>
                {`
                    @keyframes starfield {
                        0% {
                            transform: translateY(0);
                        }
                        100% {
                            transform: translateY(100px);
                        }
                    }

                    @keyframes twinkle {
                        0% {
                            opacity: 0.3;
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0.3;
                        }
                    }
                `}
            </style>
        </Box>
    );
}

export default Home;

