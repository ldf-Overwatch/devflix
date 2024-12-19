import React from "react";
import { Box, Typography, Link, Grid, IconButton, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";


const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#111",
                color: "#FFF",
                py: 5,
                px: 2,
                mt: 5,
                textAlign: "center",
            }}
        >
            {/* Slogan */}
            <Typography
                variant="h5"
                sx={{
                    color: "#E50914",
                    fontWeight: "bold",
                    mb: 2,
                    letterSpacing: 1.5,
                }}
            >
                "Développer l'innovation, coder l'avenir."
            </Typography>

            {/* Liens de navigation */}
            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{
                    mb: 2,
                    "& a": {
                        color: "#FFF",
                        textDecoration: "none",
                        fontWeight: "bold",
                        "&:hover": {
                            color: "#E50914",
                        },
                    },
                }}
            >
                <Grid item>
                    <Link href="/">Accueil</Link>
                </Grid>
                <Grid item>
                    <Link href="#skills">Compétences</Link>
                </Grid>
                <Grid item>
                    <Link href="#experiences">Expériences</Link>
                </Grid>
                <Grid item>
                    <Link href="#formation">Formation</Link>
                </Grid>
                <Grid item>
                    <Link href="/about">À Propos</Link>
                </Grid>
                <Grid item>
                    <Link href="/contact">Contact</Link>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: "#444", mb: 2 }} />

            {/* Icônes des réseaux sociaux */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
                <IconButton
                    href="https://www.linkedin.com/in/laure-dalla-fior-257560291/"
                    target="_blank"
                    sx={{ color: "#FFF", "&:hover": { color: "#E50914" } }}
                >
                    <LinkedInIcon />
                </IconButton>

                <IconButton
                    href="https://github.com/ldf-Overwatch"
                    target="_blank"
                    sx={{ color: "#FFF", "&:hover": { color: "#E50914" } }}
                >
                    <GitHubIcon />
                </IconButton>

                <IconButton
                    href="https://x.com/ldfOverwatch"
                    target="_blank"
                    sx={{ color: "#FFF", "&:hover": { color: "#E50914" } }}
                >
                    <TwitterIcon />
                </IconButton>

            </Box>

            {/* Copyright */}
            <Typography variant="body2" sx={{ color: "#AAA" }}>
                © {new Date().getFullYear()} Laure Dalla Fior. Tous droits réservés.
            </Typography>
        </Box>
    );
};

export default Footer;
