import React from 'react';
import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img from '../assets/img/img.png';
import engname from '../assets/img/engname.png';

function HeroSection() {
  return (
    <div>
      <Box style={{
        backgroundColor: '#6382ad',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        marginBottom: '-30px',
        marginLeft: '-20px'
      }}>
        <img src={img} style={{ width: 250 }} alt="personal img" />
        <Box>
          <img src={engname} style={{ width: 170, marginTop: 30, marginLeft: '-30px' }} alt="name in English" />
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginLeft: '-40px' }}>
            <a href="https://www.instagram.com/_.ebo/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ color: 'white' }} />
            </a>
            <a href="https://t.me/hema_81" target="_blank" rel="noopener noreferrer">
              <TelegramIcon sx={{ color: 'white' }} />
            </a>
            <a href="https://wa.me/9647733599572" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon sx={{ color: 'white' }} />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeroSection;
