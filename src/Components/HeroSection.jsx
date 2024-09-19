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

  // const handleWhatsAppClick = () => {
  //   window.open('https://api.whatsapp.com/send?phone=647733599572&text=hello', '_blank', 'noopener,noreferrer');
  // };
  // <a href="https://api.whatsapp.com/send?phone=647733599572&text=YOUR_MESSAGE">Chat with us on WhatsApp</a>
  // const sendWhatsAppMessage = () => {
  //   const link = `https://api.whatsapp.com/send?phone=+964${post.user_number}&text=I'm%20interested%20in%20your%20post%20${post.item_name}`;
  //   window.open(link, '_blank');
  // };

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
            <a href="https://www.instagram.com/_.ebo/">
            <InstagramIcon sx={{ color: 'white' }} />
            </a>
            <a href="https://t.me/hema_81" target="_blank" rel="noopener noreferrer">
              <TelegramIcon sx={{ color: 'white' }} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=9647733599572&text=Hello">
            <WhatsAppIcon sx={{ color: 'white' }} />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeroSection;
