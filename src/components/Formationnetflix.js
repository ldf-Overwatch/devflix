import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const formations = [
    {
        title: "Formation PHP / Framework Symfony 2 & 3",
        institution: "Human Booster",
        date: "Juin 2017 - Août 2017",
        image: "/images/formation/humanbooster.jpeg",
    },
    {
        title: "Formation Développeur Web",
        institution: "OpenClassrooms",
        date: "Sept. 2016 - Avr. 2017",
        image: "/images/formation/openclassrooms.jpeg",
    },
    {
        title: "Master européen Management et Stratégie d’Entreprise",
        institution: "Ecole de Commerce Coaching PACA",
        date: "Sept. 2015 - Juin 2016",
        image: "/images/formation/cropped_resized_image.jpeg",
    },
    {
        title: "DEESCOM, Communication",
        institution: "Ecole de Commerce Coaching PACA",
        date: "Sept. 2014 - Juin 2015",
        image: "/images/formation/cropped_resized_image.jpeg",
    },
    {
        title: "BTS Communication",
        institution: "CNED",
        date: "Sept. 2012 - Juin 2014",
        image: "/images/formation/cropped_resized_image.jpeg",
    },
];

// Image par défaut
const defaultImage = "/images/formation/cropped_resized_image.jpeg";

// Flèches personnalisées
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <Box
            sx={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                cursor: "pointer",
                color: "#FFF",
                fontSize: "2rem",
                userSelect: "none",
                padding: "10px",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.7)",
                },
            }}
            onClick={onClick}
        >
            ❮
        </Box>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <Box
            sx={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                cursor: "pointer",
                color: "#FFF",
                fontSize: "2rem",
                userSelect: "none",
                padding: "10px",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.7)",
                },
            }}
            onClick={onClick}
        >
            ❯
        </Box>
    );
};

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
        { breakpoint: 960, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
};

const FormationNetflix = () => {
    return (
        <Box id="formation" sx={{ backgroundColor: "#111", py: 5 }}>
            <Typography
                variant="h4"
                color="#FFF"
                sx={{
                    textAlign: "left",
                    mb: 4,
                    pl: 2,
                    fontWeight: "bold",
                    fontSize: "1.35rem",
                }}
            >
                Formations
            </Typography>

            <Slider {...settings}>
                {formations.map((formation, index) => (
                    <Box key={index} sx={{ position: "relative", px: 2 }}>
                        {/* Grand chiffre en fond, style "Top 10" */}
                        <Typography
                            variant="h1"
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                color: "rgba(255,255,255,0.05)",
                                fontSize: "12rem",
                                fontWeight: "bold",
                                zIndex: 1,
                                pointerEvents: "none",
                                userSelect: "none",
                            }}
                        >
                            {index + 1}
                        </Typography>

                        <Card
                            sx={{
                                backgroundColor: "#222",
                                color: "#FFF",
                                boxShadow: 3,
                                borderRadius: 2,
                                overflow: "hidden",
                                position: "relative",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                zIndex: 2,
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 0 15px rgba(229,9,20,0.5)",

                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="150"
                                image={formation.image || defaultImage}
                                alt={formation.title}
                                sx={{
                                    objectFit: "contain",
                                    backgroundColor: "#000",
                                    padding: "10px",
                                }}
                            />

                            <CardContent sx={{ position: "relative" }}>
                                <Typography variant="h6" sx={{ mb: 1, color: "#E50914" }}>
                                    {formation.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#DDD", mb: 1 }}>
                                    {formation.institution}
                                </Typography>
                                <Typography variant="caption" sx={{ color: "#AAA", display: "block", mb: 1 }}>
                                    {formation.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default FormationNetflix;

