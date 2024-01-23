import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import Image from 'next/image';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>A Propos de La Ferme B-Bio Production</CustomOverTitle>
        <Heading>B-BIO</Heading>
        <Description>
        La Ferme B-Bio Production est spécialisée dans production et multiplication de semences. Notre startup vise à répondre à la demande croissante de semences de qualité pour les agriculteurs locaux. Nous produisons la variété de semences pour les cultures les plus courantes dans la région, à savoir : la semence d&apos;arachide, la semence du riz et la semence du sésame. Nous produisons les semences de type pré base R1 et R2.
        </Description>
        {/* <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Subscribe to the newsletter <span>&rarr;</span>
          </Button>
          <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup> */}
      </Contents>
      <ImageContainer>
        {/* <Image  width='50%' height='50%' /> */}
        <img src='/onadif.jpeg' width='80%' />
        {/* <HeroIllustration /> */}
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  text-align: justify;
  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
