import { useRef, useEffect, useMemo } from "react";
import { Box, Typography } from '@mui/material';
import {
  ContentInner,
  Heading,
  Image,
  ImageContainer,
  Text,
  ContentContainer,
  ContentSection,
} from './styles';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, GSDevTools, SplitText);

export default function TextSplitTest() {

  return (
    <ContentSection>
      <ContentInner id='test-container'>
        <ImageContainer id='test-container'>
          <Image
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1655867300/Medusa/pexels-teona-swift-6913653_1_meycxw.webp'
            alt='test'
            id='test-container'
          />
        </ImageContainer>

        <ContentContainer>
          <Heading id='test-heading'>consulatu vituperatoribus</Heading>
          <Text sx={{ overflow: 'hidden' }} id='test-text'>
            Lorem ipsum dolor sit amet, sed posse aliquip convenire id, timeam
            admodum scripserit ne nec, unum postea noster te vis. Ut debitis
            nominavi constituto pri. Malorum ancillae patrioque eu pro, nam an
            mucius civibus legendos, eu tation salutandi his. Pri everti vivendo
            id. At illum integre quo. An quo erat oporteat, eam ex eruditi
            consulatu vituperatoribus.
          </Text>
        </ContentContainer>
      </ContentInner>
    </ContentSection>
  );
}
