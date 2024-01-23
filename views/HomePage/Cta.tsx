import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
// import ButtonGroup from 'components/ButtonGroup';
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
            Pourquoi nous faire confiance?
          </SectionTitle>
          <Description>
            En 3 ans, nous avons créé 4 emplois direct et plus de 20 emplois non qualifiés (main d&apos;œuvre)
            avec un chiffre d&apos;affaires de plus de 6 millions en d&apos;année 2022.
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
    text-align: justify;
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
