import { Box } from '@mui/material';
import {
  Marquee,
  MarqueeInner,
  MarqueeInnerWrap,
  MenuItem,
  MarqueeImage,
  Navbar,
  MarqueeSpan,
  MarqueeLink,
} from './styles';
export default function MarqueeContainer() {
  return (
    <>
      <Navbar>
        <MenuItem>
          <MarqueeLink to='/'>Guayaquil</MarqueeLink>
          <Marquee>
            <MarqueeInnerWrap>
              <MarqueeInner aria-hidden='true'>
                <MarqueeSpan>Frank Tower</MarqueeSpan>
                <MarqueeImage
                  sx={{ backgroundImage: 'url(/images/3.jpg)' }}></MarqueeImage>
                <MarqueeSpan>Dom Dom</MarqueeSpan>
                <MarqueeImage
                  className='marquee__img'
                  sx={{ backgroundImage: 'url(/images/3.jpg)' }}></MarqueeImage>
                <MarqueeSpan>Santa Maria</MarqueeSpan>
                <MarqueeImage
                  className='marquee__img'
                  sx={{ backgroundImage: 'url(/images/3.jpg)' }}></MarqueeImage>
                <MarqueeSpan>Big Molly</MarqueeSpan>
                <MarqueeImage
                  className='marquee__img'
                  sx={{ backgroundImage: 'url(/images/3.jpg)' }}></MarqueeImage>
                <MarqueeSpan>Frank Tower</MarqueeSpan>
                <MarqueeImage
                  className='marquee__img'
                  sx={{ backgroundImage: 'url(/images/3.jpg)' }}></MarqueeImage>
                <MarqueeSpan>Dom Dom</MarqueeSpan>
                <MarqueeImage
                  className='marquee__img'
                  sx={{ backgroundImage: 'url(/images/3.jpg)' }}></MarqueeImage>
                <MarqueeSpan>Santa Maria</MarqueeSpan>
                <MarqueeImage
                  className='marquee__img'
                  sx={{
                    backgroundImage: 'url(public/images/3.jpg)',
                  }}></MarqueeImage>
                <MarqueeSpan>Big Molly</MarqueeSpan>
                <MarqueeImage
                  className='marquee__img'
                  sx={{ background: 'url(images/3.jpg)' }}></MarqueeImage>
              </MarqueeInner>
            </MarqueeInnerWrap>
          </Marquee>
        </MenuItem>
      </Navbar>
   
    </>
  );
}
