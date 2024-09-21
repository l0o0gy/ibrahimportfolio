import React from 'react';
import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img from '../assets/img/img.png';
import engname from '../assets/img/engname.png';

function HeroSection() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/_.ebo/', 'noopener,noreferrer');
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#6382ad',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: { xs: 'row', md: 'row' },
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={img}
          sx={{ width: { xs: 200, md: 510 } }}
          alt="personal img"
        />
        <Box sx={{ marginLeft: { xs: 0, md: 2 } }}>
          <Box
            component="img"
            src={engname}
            sx={{ width: { xs: 170, md: 500 }, marginTop: 3, mb: { xs: '-30px', md: '-40px' } }}
            alt="name in English"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'space-around', md: 'space-evenly' },
              marginTop: 2,
            }}
          >
            {/* Applying hover animation to Instagram, Telegram, and WhatsApp icons */}
            <a href="https://www.instagram.com/_.ebo/">
              <InstagramIcon
                sx={{
                  color: 'white',
                  fontSize: { xs: 20, md: 40 },
                  marginLeft: { md: 2 },
                  transition: 'transform 0.3s ease', // Smooth transition
                  '&:hover': { transform: 'scale(1.2)' }, // Scaling on hover
                }}
              />
            </a>
            <a href="https://t.me/hema_81" target="_blank" rel="noopener noreferrer">
              <TelegramIcon
                sx={{
                  color: 'white',
                  fontSize: { xs: 20, md: 40 },
                  marginLeft: { md: 17 },
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.2)' },
                }}
              />
            </a>
            <a href="https://api.whatsapp.com/send?phone=9647733599572&text=Hello">
              <WhatsAppIcon
                sx={{
                  color: 'white',
                  fontSize: { xs: 20, md: 40 },
                  marginLeft: { md: 17 },
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.2)' },
                }}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeroSection;
