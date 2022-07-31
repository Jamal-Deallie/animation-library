import {
  ContentContainer,
  Image,
  HeadingContainer,
  Text,
  CardButton,
} from './styles';

export default function Card() {
  return (
    <ContentContainer>
      <div>
        <HeadingContainer>
          <Text>$20.00</Text>
          <Text>Test Name</Text>
        </HeadingContainer>

        <Image src='public/images/10.jpg' alt='' />
      </div>
      <CardButton>Add to Cart</CardButton>
    </ContentContainer>
  );
}
