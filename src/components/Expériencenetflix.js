import React, {useState} from "react";
import Slider from "react-slick";
import {Box, Typography, Card, CardContent, CardMedia, IconButton} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const experiences = [
    {
        title: "Développeur Web Full Stack - PONTOS",
        description: "Développement d’une plateforme numérique d’analyses de l’écosystème marin pour les compagnies de pêche locales en collaboration avec l’INRIA.",
        image: "/images/ponto.jpeg",
        date: "Janv. 2024 - Déc. 2024",
        tags: ["ReactJS", "Next.js", "Node.js", "AWS" ,"MongoDB" ,"Github" ,"API Rest"],
    },
    {
        title: "Développeur Web Full Stack - Mon Compte",
        description: "Auto Entrepreneur",
        image: "/images/formation/cropped_resized_image.jpeg",
        date: "Févr. 2023 - maintenant ",
        tags: ["JavaScript", "ExpressJS", "MongoDB" ,"node","next.js","ReactJS"],
    },
    {
        title: "Développeur Web Full Stack - STRIME",
        description: "Plateforme B2B facilitant les commandes entre fournisseurs et grands magasins.",
        image: "/images/strime.jpeg",
        date: "Févr. 2023 - Août 2023",
        tags: ["Next.js", "MySQL", "Docker", "CircleCI" ,"API Rest","SCSS" ," ExpressJS," ,"Sequeliz" ,'Git' ,
            "Nginx" ," tests unitaires avec Jest"],
    },
    {
        title: "Développeur JavaScript - GRAPHCOMMENT",
        description: "Plateforme SaaS de discussions dédiée aux médias et aux blogs.",
        image: "/images/graphc.jpeg",
        date: "Janv. 2019 - Déc. 2022",
        tags: ["GraphQL", "TypeScript", "MongoDB","API Rest","Tailwind","SCSS" ,"ExpressJS","Mongoose"
            ,"Mongoose" ,"Git" ,"Nginx"],
    },
    {
        title: "Chef de Projets Marketing - ONE GLOBAL QOL",
        description: "Organisation d’événements et gestion des campagnes marketing.",
        image: "/images/formation/cropped_resized_image.jpeg",
        date: "Sept. 2015 - Sept. 2016",
        tags: ["Marketing", "Événementiel", "Gestion de projet"],
    },
];

const defaultImage = "/images/formation/cropped_resized_image.jpeg";

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
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
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
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            onClick={onClick}
        >
            ❯
        </Box>
    );
};

const ExperiencesNetflix = () => {
    const [expandedTags, setExpandedTags] = useState(null);

    const toggleTags = (index) => {
        setExpandedTags(expandedTags === index ? null : index);
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

    return (
        <Box id="experiences" sx={{ backgroundColor: "#111", py: 5 }}>
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
                Expériences
            </Typography>

            <Slider {...settings}>
                {experiences.map((exp, index) => (
                    <Box key={index} sx={{ position: "relative", px: 2 }}>
                    <Card
                        key={index}
                        sx={{
                            backgroundColor: "linear-gradient(to bottom, #2a2a2a, #111)",
                            color: "#FFF",
                            mx: 2,
                            mb: 2,
                            boxShadow: 3,
                            borderRadius: 2,
                            height: "350px", // Hauteur fixe pour uniformiser
                            display: "flex",
                            flexDirection: "column",
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
                            image={exp.image || defaultImage}
                            alt={exp.title}
                            sx={{ objectFit: "contain", backgroundColor: "#000", padding: "10px" }}
                        />

                        <CardContent
                            sx={{
                                flex: 1,
                                overflowY: "auto",
                                padding: "16px",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 1, color: "#E50914" }}>
                                {exp.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#FFF", mb: 1 }}>
                                {exp.description}
                            </Typography>

                            {/* Tags */}
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, alignItems: "center" }}>
                                {exp.tags.slice(0, 3).map((tag, idx) => (
                                    <Typography
                                        key={idx}
                                        variant="caption"
                                        sx={{
                                            color: "#FFF",
                                            border: "1px solid #FFF",
                                            borderRadius: "4px",
                                            px: 1.2,
                                            py: 0.2,
                                            fontSize: "0.8rem",
                                        }}
                                    >
                                        {tag}
                                    </Typography>
                                ))}
                                {exp.tags.length > 3 && expandedTags !== index && (
                                    <IconButton
                                        onClick={() => toggleTags(index)}
                                        sx={{
                                            color: "#FFF",
                                            fontSize: "0.8rem",
                                            padding: 0,
                                        }}
                                    >
                                        +{exp.tags.length - 3}
                                    </IconButton>
                                )}
                            </Box>

                            {expandedTags === index && (
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                                    {exp.tags.slice(3).map((tag, idx) => (
                                        <Typography
                                            key={idx}
                                            variant="caption"
                                            sx={{
                                                color: "#FFF",
                                                border: "1px solid #FFF",
                                                borderRadius: "4px",
                                                px: 1.2,
                                                py: 0.2,
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {tag}
                                        </Typography>
                                    ))}
                                </Box>
                            )}

                            <Typography variant="caption" sx={{ color: "#AAA", mt: "auto" }}>
                                {exp.date}
                            </Typography>
                        </CardContent>
                    </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ExperiencesNetflix;
