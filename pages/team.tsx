import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import { media } from 'utils/media';

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

export default function Teams() {
    return (
        <Page title="Our team">
            <Wrapper>
                <CustomAutofitGrid>
                    {FEATURES.map((singleFeature, idx) => (
                        <BasicCard key={singleFeature.title} {...singleFeature} />
                    ))}
                </CustomAutofitGrid>
            </Wrapper>
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
