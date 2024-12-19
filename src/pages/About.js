import React from "react";
import { Box, Typography, Avatar, Grid, Fade } from "@mui/material";

const About = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#111",
                color: "#FFF",
                py: 5,
                px: 2,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Grid
                container
                justifyContent="center"
                sx={{ maxWidth: "730px", textAlign: "center" }}
            >
                {/* Animation d'apparition et positionnement */}
                <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
                    <Fade in={true} timeout={1000}>
                        <Avatar
                            src="/images/avatar.jpg"
                            alt="Laure Dalla Fior"
                            sx={{
                                width: 180,
                                height: 180,
                                mx: "auto",
                                border: "3px solid #E50914",
                                mb: 2,
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                },
                            }}
                        />
                    </Fade>
                </Grid>

                <Grid item xs={12}>
                    <Fade in={true} timeout={1500}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#E50914",
                                fontWeight: "bold",
                                mb: 3,
                                fontSize: { xs: "2.5rem", sm: "3rem" },
                            }}
                        >
                            Construire un futur digital, ensemble
                        </Typography>
                    </Fade>
                </Grid>

                <Grid item xs={12}>
                    <Fade in={true} timeout={2000}>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 3,
                                maxWidth: "700px",
                                color: "#DDD",
                                lineHeight: 1.8,
                                mx: "auto",
                                fontSize: "1.1rem",
                            }}
                        >
                            Passionnée par l'innovation et la création d’applications performantes, je suis
                            <strong> Laure Dalla Fior</strong>, une développeuse web Full Stack. Avec une
                            expertise dans les technologies comme <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>Node.js</strong> et
                            <strong>Symfony</strong>, je mets à profit mon savoir-faire pour façonner des solutions numériques
                            modernes et adaptées aux besoins spécifiques de chaque projet. Chaque ligne de code
                            est une nouvelle possibilité de créer, d’améliorer et de connecter le monde numérique
                            avec la réalité.
                        </Typography>
                    </Fade>
                </Grid>

                <Grid item xs={12}>
                    <Fade in={true} timeout={2500}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#DDD",
                                mb: 3,
                                maxWidth: "700px",
                                lineHeight: 1.8,
                                mx: "auto",
                                fontSize: "1.1rem",
                            }}
                        >
                            Ma passion pour le développement web ne se limite pas à la création de sites et
                            d'applications. Mon objectif est de faire évoluer la manière dont les utilisateurs
                            interagissent avec la technologie et d’apporter des solutions concrètes qui rendent la
                            vie quotidienne plus fluide et productive. De mes expériences professionnelles en tant
                            que développeuse freelance et en entreprise, j’ai appris à résoudre des problèmes complexes
                            et à travailler de manière collaborative pour fournir des résultats impressionnants.
                        </Typography>
                    </Fade>
                </Grid>

                {/* Compétences avec une meilleure présentation */}
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#E50914",
                            fontWeight: "bold",
                            textAlign: "center",
                            mb: 2,
                            fontSize: { xs: "1.5rem", sm: "2rem" },
                        }}
                    >
                        Mes Compétences Clés
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            maxWidth: "700px",
                            color: "#DDD",
                            textAlign: "center",
                            fontSize: "1.1rem",
                            mx: "auto",
                        }}
                    >
                        - <strong>Technologies</strong> :  JavaScript, TypeScript, <br />
                        - <strong>Bases de données</strong> :  MongoDB ,MySQL <br />
                        - <strong>Frameworks</strong> :  ExpressJS, ReactJS, Node.js, Deno, <br />
                        - <strong>Outils</strong> :  Git, IntelliJ IDEA, RobotMongo, Trello<br />
                        - <strong>Méthodologies</strong> : Agile Scrum, Clean Code
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
