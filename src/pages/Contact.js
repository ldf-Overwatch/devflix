import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(""); // Message de statut
    const [botField, setBotField] = useState(""); // Champ caché pour les bots

    // Fonction pour valider l'email
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    // Fonction pour valider les champs
    const validateForm = () => {
        if (!name || !email || !message) {
            setStatus("Tous les champs doivent être remplis.");
            return false;
        }
        if (!validateEmail(email)) {
            setStatus("Veuillez entrer un email valide.");
            return false;
        }
        if (botField) {
            setStatus("Détection de bot. Veuillez ne pas remplir ce champ.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation avant l'envoi
        if (!validateForm()) {
            return;
        }

        emailjs.init({
            publicKey: "Cpp9itWIYAVPo7VHd", // Ta clé publique EmailJS
        });

        // Paramètres à envoyer à EmailJS
        const templateParams = {
            user_name: name,
            user_email: email,
            message: message,
        };

        // Envoi de l'email via EmailJS
        emailjs
            .send(
                "service_s44njxr",   // Ton ID de service EmailJS
                "template_hvsjzmw",  // Ton ID de template EmailJS
                templateParams
            )
            .then(
                (response) => {
                    console.log("Message envoyé : ", response);
                    setStatus("Votre message a bien été envoyé !");
                    setName("");
                    setEmail("");
                    setMessage("");
                    setBotField(""); // Réinitialiser le champ caché
                },
                (error) => {
                    console.error("Erreur d'envoi : ", error);
                    setStatus("Une erreur est survenue, veuillez réessayer.");
                }
            );
    };

    return (
        <Box
            sx={{
                maxWidth: 600,
                mx: "auto",
                my: 5,
                p: 3,
                backgroundColor: "#222",
                color: "#FFF",
                borderRadius: 2,
            }}
        >
            <Typography variant="h4" gutterBottom>
                Contactez-moi
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Nom"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{ style: { color: "#FFF" } }}
                    sx={{ input: { color: "#FFF" }, mb: 2 }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="user_name"
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{ style: { color: "#FFF" } }}
                    sx={{ input: { color: "#FFF" }, mb: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="user_email"
                />
                <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    InputLabelProps={{ style: { color: "#FFF" } }}
                    sx={{ textarea: { color: "#FFF" }, mb: 3 }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                />

                {/* Champ caché pour la détection des bots */}
                <input
                    type="text"
                    name="botField"
                    style={{ display: "none" }}
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                />

                <Button variant="contained" color="primary" type="submit">
                    Envoyer
                </Button>
            </form>

            {/* Message de statut */}
            {status && (
                <Typography
                    sx={{
                        mt: 2,
                        color: status.includes("envoyé") ? "green" : "red", // Vert pour succès, rouge pour erreur
                        fontWeight: "bold",
                    }}
                >
                    {status}
                </Typography>
            )}
        </Box>
    );
};

export default Contact;
