import React, { useState } from "react";
import {AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link, useNavigate, useLocation } from "react-router-dom";


function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Fonction pour ouvrir/fermer le Drawer
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Fonction pour défilement fluide ou redirection
    const scrollToSection = (sectionId) => {
        if (location.pathname !== "/") {
            navigate("/"); // Rediriger vers la home
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Petit délai pour s'assurer que le DOM est chargé
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const drawer = (
        <Box
            sx={{ width: 250, backgroundColor: "#111", height: "100%", color: "#FFF" }}
            onClick={handleDrawerToggle}
        >
            <Typography variant="h6" sx={{ p: 2, color: "#E50914" }}>
                Laure Dalla Fior
            </Typography>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    <ListItemText primary="Accueil" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection("skills")}>
                    <ListItemIcon>
                        <CodeIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    <ListItemText primary="Compétences" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection("experiences")}>
                    <ListItemIcon>
                        <WorkIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    <ListItemText primary="Expériences" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection("formation")}>
                    <ListItemIcon>
                        <SchoolIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    <ListItemText primary="Formation" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon>
                        <InfoIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    <ListItemText primary="À Propos" />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                    <ListItemIcon>
                        <ContactMailIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#111" }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        color: "#E50914",
                        fontWeight: "bold",
                        flexGrow: 1,
                    }}
                >
                    coderflix
                </Typography>

                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        startIcon={<HomeIcon />}
                    >
                        Accueil
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection("skills")}
                        startIcon={<CodeIcon />}
                    >
                        Compétences
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection("experiences")}
                        startIcon={<WorkIcon />}
                    >
                        Expériences
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection("formation")}
                        startIcon={<SchoolIcon />}
                    >
                        Formation
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about"
                        startIcon={<InfoIcon />}
                    >
                        À Propos
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact"
                        startIcon={<ContactMailIcon />}
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>

            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}

export default Header;
