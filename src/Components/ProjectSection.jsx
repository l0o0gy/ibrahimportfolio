import React from 'react';
import { Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/img/logoproject.png';
import img2 from '../assets/img/flyerproject.png';
import img3 from '../assets/img/menuproject.png';
import img4 from '../assets/img/coverproject.png';
import img5 from '../assets/img/soicalmediaproject.png';
import img6 from '../assets/img/3ditemproject.png';
import { useNavigate } from 'react-router-dom';

const projects = [
    { src: img1, alt: 'Logo Project', id: 1 },
    { src: img2, alt: 'Flyer Project', id: 2 },
    { src: img3, alt: 'Menu Project', id: 3 },
    { src: img4, alt: 'Cover Project', id: 4 },
    { src: img5, alt: 'Social Media Project', id: 5 },
    { src: img6, alt: '3D Item Project', id: 6 },
];

function ProjectSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const navigate = useNavigate();

    const handleCardClick = (projectId) => {
        switch (projectId) {
            case 1:
                navigate("/logo");
                break;
            case 2:
                navigate("/flyer");
                break;
            case 3:
                navigate("/menu");
                break;
            case 4:
                navigate("/cover");
                break;
            case 5:
                navigate("/socialMedia");
                break;
            case 6:
                navigate("/threedItem");
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Box
                component="span"
                sx={{
                    mt: 2,
                    bgcolor: '#6382ad',
                    fontSize: { xs: 20, md: 30 },
                    fontWeight: 'bold',
                    p: 1,
                    color: 'white',
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: { xs: 2, md: 5 },
                }}
            >
                Project
            </Box>

            <Box
                component="section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 2,
                    m: { xs: 2, md: 5 },
                    fontSize: { xs: 10, md: 15 },
                }}
            >
                <Box
                    ref={ref}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                        gap: { xs: 0, md: 10 },
                        transform: inView ? 'translateY(0)' : 'translateY(50px)',
                        opacity: inView ? 1 : 0,
                        transition: 'transform 0.8s ease, opacity 0.8s ease',
                    }}
                >
                    {projects.map((project) => (
                        <Box
                            component="img"
                            src={project.src}
                            alt={project.alt}
                            key={project.id}
                            sx={{
                                width: { xs: 150, md: 250 },
                                height: 'auto',
                                mt: { xs: 0, md: '-50px' },
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                            onClick={() => handleCardClick(project.id)} // Pass the project ID
                        />
                    ))}
                </Box>
            </Box>
        </div>
    );
}

export default ProjectSection;
