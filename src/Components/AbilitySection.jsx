import React from 'react';
import Box from '@mui/material/Box';

function AbilitySection() {
    return (
        <div style={{ position: 'relative' }}>
            <Box
                component="span"
                sx={{
                    position: 'absolute',
                    top: { xs: '-13px', md: "-20px" },
                    left:{xs:40,md:70},
                    m: 0,
                    bgcolor: 'white',
                    fontSize: { xs: 20, md: 30 },
                    fontWeight: 'bold',
                    color: '#6382ad',
                }}
            >
                Abilities
            </Box>

            <Box
                component="section"
                sx={{
                    p: 2,
                    border: '1px dashed #6382ad',
                    m: { xs: 2, md: 5 },
                    fontSize: { xs: 15, md: 20 },
                    fontWeight: 'bold',
                }}
            >
                <ol>
                    <li>Communication</li>
                    <li>Team work</li>
                    <li>Problem solving</li>
                    <li>Design</li>
                    <li>Computer Skills</li>
                </ol>
            </Box>
        </div>
    );
}

export default AbilitySection;
