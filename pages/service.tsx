import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import { media } from 'utils/media';
import Activites from 'views/HomePage/Activites';

const FEATURES = [
    {
        imageUrl: '/ab.jpeg',
        title: 'ABAKAR MAHAMAT',
        description: "CEO & FOUNDER"
    },
    {
        imageUrl: '/grace.jpeg',
        title: 'Tamno Grâce',
        description: "Product Manager"
    },
];

export default function Service() {
    return (
        <Page title="Nos services">
            <Activites />
        </Page>
    );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
