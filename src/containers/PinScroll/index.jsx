import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Typography } from '@mui/material';
import {
  Section,
  Container,
  Placeholder,
  Image,
  ImageWrapper,
  ScrollWrapper,
  TextWrapper,
} from './styles';
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function PinScrollContainer() {
  function useArrayRef() {
    const refs = useRef([]);
    refs.current = [];
    return [refs, ref => ref && refs.current.push(ref)];
  }

  const [arrow, setArrow] = useArrayRef();
  const scrollWrapper = useRef(null);
  const [wrappers, setWrapper] = useArrayRef();
  useLayoutEffect(() => {
    gsap.to(arrow.current, { y: 10, repeat: -1, yoyo: true });
  }, [arrow]);

  useLayoutEffect(() => {
    gsap.to(wrappers.current, {
      x: (_, el) => -(el.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: scrollWrapper.current,
        start: 'top top',
        end: '400%',
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, [wrappers]);

  return (
    <Section>
      <Container>
        <Placeholder>
          <Box sx={{ mb: 36 }}>
            <Typography sx={{ textAlign: 'left', margin: 0 }}>
              GreenSock
            </Typography>
            <Typography sx={{ fontSize: 64 }}>ScrollTrigger</Typography>
          </Box>
          <h2>Scroll down</h2>
          <Typography sx={{ fontSize: 32 }} ref={setArrow}>
            &#8595;
          </Typography>
        </Placeholder>
        <ScrollWrapper ref={scrollWrapper}>
          <TextWrapper ref={setWrapper}>
            Test Test Test Test Test Test Test Test Test Test Test Test Test
            Test Test Test Test Test Test Test
          </TextWrapper>
          <ImageWrapper ref={setWrapper}>
            <Image
              className='img'
              src='https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
              alt='Body of water surrounded with trees'
            />
            <Image
              className='img'
              src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
              alt='Beautiful woodland path'
            />
            <Image
              className='img'
              src='https://images.unsplash.com/photo-1620592679717-d9d76bb22e6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
              alt='Poppy flowers field'
            />
          </ImageWrapper>
          <TextWrapper ref={setWrapper}>
            Test Test Test Test Test Test Test Test Test Test Test Test Test
            Test Test Test Test Test Test Test
          </TextWrapper>
        </ScrollWrapper>
      </Container>
      <Placeholder>
        <Typography sx={{ fontSize: 32 }} ref={setArrow}>
          &#8593;
        </Typography>
        <h2>Scroll up </h2>
        <p>Have a nice day! ✌️</p>
      </Placeholder>
    </Section>
  );
}
