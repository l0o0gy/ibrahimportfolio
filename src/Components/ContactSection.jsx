import React, { useState } from 'react';
import { Box, FormLabel, TextField, Button, Typography, Grid } from '@mui/material';
import pattern from '../assets/img/pattern.png'
function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    mx: 'auto',
                    m: { xs: 2, md: 5 },
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }}
            >
                <Typography variant="h6" gutterBottom sx={{ m: { xs: 0, md: 10 } }}>
                    If you have any feedback you would like to share, I would be happy to hear it. Also, if you need a designer, I'm here to help. You can contact me anytime.
                </Typography>

                <Box sx={{ maxWidth: "100%" }}>
                    <Box sx={{ mb: 2 }}>
                        <FormLabel>Name</FormLabel>
                        <TextField
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <FormLabel>Your Email</FormLabel>
                        <TextField
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <FormLabel>Message</FormLabel>
                        <TextField
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={4}
                            required
                        />
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: '100%',
                            backgroundColor: '#7fa0c3',
                            '&:hover': {
                                backgroundColor: '#6a92b2',
                            },
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
            <Box
                component="img"
                src={pattern}
                alt="pattern"
                sx={{
                    width: '100%',
                    height: {xs:50,md:150},

                }}
            />
        </>
    );
}

export default ContactSection;
