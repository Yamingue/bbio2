import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>High-Precision Water Purification Without Chemicals or Electricity</OverTitle>
          <SectionTitle>
            Why trust us
          </SectionTitle>
          <Description>
            O'Nadif effectively eliminates bacteria, viruses, and other pathogens from contaminated water, achieving an exceptional removal rate of nearly 100% (on average, up to 99.99999%) without the reliance on chemicals or electrical energy.
            <br />
            O'Nadif is a compact and portable membrane filtration unit weighing 30 kg. It can filter up to 1100 liters of water per day, often exceeding this capacity to filter as much as 5,000 liters per day.
            <br />
            O'Nadif is designed to filter a variety of water sources, including surface water such as rivers, lakes or ponds, as well as groundwater such as wells or springs. It can also be used to filter rainwater, offering versatility in its application to make a variety of water sources potable.
          </Description>
          {/* <ButtonGroup>
            <NextLink href="#early-access" passHref>
              <Button>
                Subscribe to the newsletter <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="#whitepaper" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup> */}
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 98%;
    margin-top: 2rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
