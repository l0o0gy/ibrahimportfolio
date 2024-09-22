import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <Box
      sx={{
        color: '#7fa0c3',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent:'center',
      }} >
        <a href="https://www.instagram.com/_.ebo/" style={{ textDecoration: 'none', color: '#7fa0c3', fontSize: 20 }}>
          <InstagramIcon
            sx={{
              fontSize: { xs: 20, md: 30 },
              marginRight: 1,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.2)' },

            }}
          />


        </a>
        <Typography sx={{mt:{xs:0 ,md:0.5}, fontSize:{xs:15} ,mr:1}}> _.ebo</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent:'center',
      }}>
        <a href="https://t.me/hema_81" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#7fa0c3' }}>
          <TelegramIcon
            sx={{
              fontSize: { xs: 20, md: 30 },
              marginRight: 1,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          />


        </a>
        <Typography sx={{mt:{xs:0 ,md:0.5} ,fontSize:{xs:15} ,mr:1}} >@hema_81</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent:'center',
      }}>
        <a href="https://api.whatsapp.com/send?phone=9647733599572&text=Hello" style={{ textDecoration: 'none', color: '#7fa0c3' }}>
          <WhatsAppIcon
            sx={{
              fontSize: { xs: 20, md: 30 },
              marginRight: 1,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          />
        </a>
        <Typography sx={{mt:{xs:0 ,md:0.5}, fontSize:{xs:15} ,mr:1}}>+964 773 359 9572</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
