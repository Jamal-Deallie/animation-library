import { styled } from '@mui/system';
import { Box, Link } from '@mui/material';

export const MarqueeImage = styled(Box)({
  width: '15vw',
  height: '70%',
  margin: '0 2vw',
  borderRadius: '5vw',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundColor: 'rgba(255, 255, 255,)',
});

export const MarqueeInner = styled(Box)({
  '@keyframes marquee': {
    from: {
      transform: 'translateX(0)',
    },
    to: {
      transform: 'translateX(-100%)',
    },
  },
//   animation: 'marquee 15s linear infinite;',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  height: '100%',
  position: 'relative',
  backgroundColor: 'aqua',
  willChange: 'transform',
});

export const Marquee = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  background: '#000',
  //   transform: 'translate(0px, -101%)',
});

export const MarqueeInnerWrap = styled(Box)({
  background: 'light-blue',
  width: '100%',
  height: '100%',
  //   transform: 'translate(0px, 101%)',
});

export const MenuItem = styled(Box)({
  cursor: 'default',
  position: 'relative',
  boxShadow: '0 -1px #a7927b',
  textAlign: 'center',
  backgroundColor: 'pink',
});

export const MarqueeLink = styled(Link)({
  fontSize: '6vw',
  lineHeight: 1.2,
  fontWeight: 600,
  padding: '1vh 1vw 0',
  textTransform: 'uppercase',
  display: 'block',
  position: 'relative',
  textDecoration: 'none',
});

export const Navbar = styled('nav')({
  backgroundColor: '#f8c792',
  height: '100vh',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1000,
  display: 'block',
});

// width: 15vw;
// height: 70%;
// margin: 0 2vw;
// border-radius: 5vw;
// background-size: cover;
// background-position: 50% 50%;

export const MarqueeSpan = styled('span')({
  fontSize: '6vw',
  lineHeight: 1.2,
  fontWeight: 400,
  padding: '1vh 1vw 0',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'new-reason, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  whiteSpace: 'nowrap',
});

// @keyframes marquee {
// 	100% {
// 		transform: translate3d(-50%, 0, 0);
// 	}
// }

// margin: 0;
// --color-text: #111;
// --color-bg: #f8c792;
// --color-link: #000;
// --color-link-hover: #000;
// --color-border: #a7927b;
// --marquee-bg: #000;
// --marquee-text: #fff;
// --menu-focus: #775e41;
// color: var(--color-text);
// background-color: var(--color-bg);
// font-family: reason-new, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;

