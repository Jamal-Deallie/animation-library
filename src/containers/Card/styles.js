import { styled } from '@mui/system';
import { Container, Button, Typography } from '@mui/material';

export const ContentContainer = styled('div')`
  background: #1c1c1c;
  width: 100%;
  border-radius: none;
  border: solid 1px #d14334;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50rem;
`;

export const HeadingContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;
export const Image = styled('img')`
  width: 90%;
  padding: 5% 0;
  display: block;
  margin: 0 auto;
`;
export const CardButton = styled(Button)(({ theme }) => ({
  color: '#1c1c1c',
  fontSize: '2.4rem',
  background: 'none',
  width: '100%',
  borderRadius: '0',
  padding: '1rem 0',
  borderTop: '1px solid #d14334',
  transition: 'transform 250ms',
  letterSpacing: '0.2rem',
  fontWeight: 400,
  '&:hover': {
    backgroundColor: 'red',
    color: 'white',
  },
}));

export const Text = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #e9e7dc;
`;
