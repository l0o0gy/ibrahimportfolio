import React from 'react';
import Box from '@mui/material/Box';
import img1 from '../assets/img/adobe-aero_5968420.png';
import img2 from '../assets/img/dimension_10526743.png';
import img3 from '../assets/img/illustrator_5968472.png';
import img4 from '../assets/img/indesign_5968482.png';
import img5 from '../assets/img/photoshop_5968520.png';
import img6 from '../assets/img/powerpoint_732224.png';
import img7 from '../assets/img/logo_15465764.png';

function SkillsSection() {
    return (
        <div style={{ position: 'relative' }}>
            <Box
                component="span"
                sx={{
                    position: 'absolute',
                    top: {xs:'-13px',md:"-20px"},
                    left: { xs: 40, md: 70 },
                    m: 0,
                    bgcolor: 'white',
                    fontSize: { xs: 20, md: 30 },
                    fontWeight: 'bold',
                    color: '#6382ad',
                }}
            >
                Skills
            </Box>

            <Box
                component="section"
                sx={{
                    p: 2,
                    border: '1px dashed #6382ad',
                    m: { xs: 2, md: 5 },
                    fontSize: { xs: 15, md: 20 },
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(4, 1fr)', md: 'repeat(4, 1fr)' },
                        gap: 2,
                        mt: 2,
                        ml: 2,
                        mb: 2,
                    }}
                >
                    <Box
                        component="img"
                        src={img1}
                        alt="Adobe Aero"
                        sx={{
                            width: { xs: 50, md: 70 },
                            height: { xs: 50, md: 70 },
                            transition: 'transform 0.3s ease', // Add smooth animation
                            '&:hover': { transform: 'scale(1.1)' }, // Scale on hover
                        }}
                    />
                    <Box
                        component="img"
                        src={img2}
                        alt="Dimension"
                        sx={{
                            width: { xs: 50, md: 70 },
                            height: { xs: 50, md: 70 },
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.1)' },
                        }}
                    />
                    <Box
                        component="img"
                        src={img3}
                        alt="Illustrator"
                        sx={{
                            width: { xs: 50, md: 70 },
                            height: { xs: 50, md: 70 },
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.1)' },
                        }}
                    />
                    <Box
                        component="img"
                        src={img4}
                        alt="InDesign"
                        sx={{
                            width: { xs: 50, md: 70 },
                            height: { xs: 50, md: 70 },
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.1)' },
                        }}
                    />
                    <Box
                        component="img"
                        src={img5}
                        alt="Photoshop"
                        sx={{
                            width: { xs: 50, md: 70 },
                            height: { xs: 50, md: 70 },
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.1)' },
                        }}
                    />
                    <Box
                        component="img"
                        src={img6}
                        alt="PowerPoint"
                        sx={{
                            width: { xs: 50, md: 70 },
                            height: { xs: 50, md: 70 },
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.1)' },
                        }}
                    />
                    <Box
                        component="img"
                        src={img7}
                        alt="Logo Design"
                        sx={{
                            width: { xs: 50, md: 70 },
                            height: { xs: 50, md: 70 },
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.1)' },
                        }}
                    />
                </Box>
            </Box>
        </div>
    );
}

export default SkillsSection;
