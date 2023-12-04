import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import OverTitle from 'components/OverTitle';

const FEATURES = [
  {
    imageUrl: '/grid-icons/rural-house-with-wind-mill-svgrepo-com.svg',
    title: 'Rural communities.',
    description: "Meeting drinking water needs in rural areas where access to safe water sources is limited."
  },
  {
    imageUrl: '/grid-icons/undraw_medicine_b-1-ol.svg',
    title: 'Schools and health centers.',
    description: "Ensuring a reliable supply of drinking water in educational institutions and health facilities."
  },
  {
    imageUrl: '/grid-icons/undraw_explore_re_8l4v.svg',
    title: 'Expeditions and outdoor activities.',
    description: "Providing a safe source of water for expeditions in the open air or in remote areas."
  },
  {
    imageUrl: '/grid-icons/ambulance-svgrepo-com.svg',
    title: 'Emergency humanitarian aid.',
    description: "Provision of drinking water in areas affected by natural disasters or conflict."
  },
  {
    imageUrl: '/grid-icons/undraw_camping_noc8.svg',
    title: 'Refugee camps.',
    description: "Installation to guarantee a safe supply of drinking water in refugee camps."
  }
];

export default function Features() {
  return (
    <Container>
      <OverTitle style={{ textAlign: 'center', marginBottom: 20 }}>
        OUR FIELDS OF INTERVENTION
      </OverTitle>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
