import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import OverTitle from 'components/OverTitle';

const FEATURES = [
  {
    imageUrl: '/activites/undraw_gardening_re_e658.svg',
    title: 'Agriculture durable.',
    description: "Mettre en place des pratiques agricoles durables pour minimiser notre impact sur l'environnement."
  },
  {
    imageUrl: '/activites/undraw_collaboration_re_vyau.svg',
    title: "Partenariats",
    description: "Établir des partenariats avec des agriculteurs locaux pour les aider à améliorer leur rendement et leur rentabilité en utilisant nos semences de qualité supérieure."
  },
  {
    imageUrl: '/activites/undraw_in_progress_re_m1l6.svg',
    title: 'Extension de production.',
    description: "Étendre notre production de semences dans les années à venir pour répondre à la demande croissante des agriculteurs locaux."
  },
  {
    imageUrl: '/activites/undraw_for_review_eqxk.svg',
    title: 'Contrôle qualité.',
    description: "Maintenir un contrôle qualité strict pour assurer la qualité constante de nos semences."
  }
];

export default function Features() {
  return (
    <Container>
      <OverTitle style={{ textAlign: 'center', marginBottom: 20 }}>
        Nos axes d&apos;interventions
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
