import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
    { title: "JavaScript", category: "Langages de programmation" },
    { title: "ReactJS", category: "Frameworks" },
    { title: "Node.js", category: "Frameworks" },
    { title: "ExpressJS", category: "Frameworks" },
    { title: "MongoDB", category: "Bases de données" },
    { title: "MySQL", category: "Bases de données" },
    { title: "MUI", category: "Bibliothèques" },
    { title: "Tailwind", category: "Bibliothèques" },
    { title: "Bootstrap", category: "Bibliothèques" },
    { title: "TypeScript", category: "Langages de programmation" },
    { title: "PHP", category: "Langages de programmation" },
    { title: "Symfony", category: "Frameworks" },
    { title: "HTML5", category: "Langages de programmation" },
    { title: "CSS3", category: "Langages de programmation" },
    { title: "ChatGPT", category: "Outils" },
    { title: "Cursor", category: "Outils" },
    { title: "Jetbrains", category: "Outils" },
    { title: "Git", category: "Outils" },
    { title: "WebStorm", category: "Outils" },
    { title: "Trello", category: "Outils" },
];

const CustomPrevArrow = ({ onClick }) => (
    <Box
        onClick={onClick}
        sx={{
            position: "absolute",
            left: "0px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "50px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: "rgba(0,0,0,0.5)",
            "&:hover": {
                background: "rgba(0,0,0,0.7)",
            },
        }}
    >
        <Typography variant="h4" sx={{ color: "#fff", userSelect: "none" }}>
            ❮
        </Typography>
    </Box>
);

const CustomNextArrow = ({ onClick }) => (
    <Box
        onClick={onClick}
        sx={{
            position: "absolute",
            right: "0px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "50px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: "rgba(0,0,0,0.5)",
            "&:hover": {
                background: "rgba(0,0,0,0.7)",
            },
        }}
    >
        <Typography variant="h4" sx={{ color: "#fff", userSelect: "none" }}>
            ❯
        </Typography>
    </Box>
);

const SkillsNetflix = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 960, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <Box id="skills" sx={{ backgroundColor: "#111", py: 5 }}>
            <Typography
                variant="h4"
                color="#FFF"
                sx={{
                    textAlign: "left",
                    mb: 4,
                    pl: 2,
                    fontWeight: "bold",
                    fontSize: "1.6rem",
                }}
            >
                Compétences
            </Typography>

            <Slider {...settings}>
                {skills.map((skill, index) => (
                    <Box key={index} sx={{ px: 1 }}>
                        <Card
                            sx={{
                                background: "linear-gradient(to bottom, #2a2a2a, #111)",
                                color: "#FFF",
                                borderRadius: "4px",
                                textAlign: "left",
                                boxShadow: "none",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 0 15px rgba(229,9,20,0.5)",
                                },
                                height: "180px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                p: 2,
                            }}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold", mb: 0.5 , color: "#E50914"  }}
                                >
                                    {skill.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#ccc" }}>
                                    {skill.category}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default SkillsNetflix;
