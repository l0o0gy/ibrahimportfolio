import React from 'react';
import Box from '@mui/material/Box';

function AboutSection() {
    return (
        <div style={{ position: 'relative' }}>
            <Box
                component="span"
                sx={{
                    position: 'absolute',
                    top: {xs:'-13px',md:"-20px"},
                    lift:0,
                    m: 0,
                    ml:{xs:5,md:10},
                    bgcolor:'white',
                    fontSize: { xs: 20, md: 30},
                    fontWeight: 'bold',
                    color:'#6382ad',
                }}
            >
                About Me
            </Box>
            <Box
                component="section"
                sx={{
                    p: 2,
                    border: '1px dashed #6382ad',
                    m: { xs: 2, md: 5 },
                    fontSize: { xs: 10, md: 15 }
                }}
            >
                <h1>Lorem Ipsum is a type of placeholder text used in the graphic, print, and publishing industries.
                    It serves to preview layouts and visual mockups without relying on meaningful content.
                    Its origins trace back to the classical Latin literature, and it has become a standard for
                    demonstrating the visual form of a document or typeface.
                </h1>
            </Box>
        </div>
    );
}

export default AboutSection;
