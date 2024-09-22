import React from 'react';
import Box from '@mui/material/Box';

function AboutSection() {
    return (
        <div style={{ position: 'relative' }}>
            <Box
                component="span"
                sx={{
                    position: 'absolute',
                    top: { xs: '-13px', md: "-20px" },
                    left: { xs: 40, md: 70 },
                    m: 0,
                    bgcolor: 'white',
                    fontSize: { xs: 20, md: 30 },
                    fontWeight: 'bold',
                    color: '#6382ad',
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
                <h1>I`m Ibrahim Bilal Mohammed Alkhushally Alqaysi ,
                    21 years old from baghdad,iraq. A Student from
                    U.O.T bio mechanical department Eng. I have
                    experience in printer and orginaizer in left sphere
                    co.  interested in design and printing to develop
                    my skills i believe that designer can make life
                    easier and show world that iraqi man can design
                </h1>
            </Box>
        </div>
    );
}

export default AboutSection;
