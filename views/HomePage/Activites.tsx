import React from "react";
import styled from "styled-components";
import AutofitGrid from "components/AutofitGrid";
import BasicCard from "components/BasicCard";
import Container from "components/Container";
import { media } from "utils/media";
import OverTitle from "components/OverTitle";

const FEATURES = [
  {
    imageUrl: "/activites/undraw_environment_iaus.svg",
    title: "Production des semences.",
    description: "Produire des semences de qualité supérieure pour les cultures les plus courantes dans la région, à savoir : la semence d&apos;arachide, la semence du riz et la semence du sésame."
  },
  {
    imageUrl: "/activites/undraw_all_the_data_re_hh4w.svg",
    title: "Formations et conseils.",
    description: "Former les agriculteurs locaux sur les meilleures pratiques agricoles pour maximiser le rendement en utilisant nos semences."
  },
  {
    imageUrl: "/activites/undraw_startup_life_re_8ow9.svg",
    title: "Accompagnement et structuration des petits producteurs.",
    description: ""
  }
];

export default function Activites() {
  return (
    <Container>
      <OverTitle style={{ textAlign: "center", marginBottom: 20 }}>
        Nos services disponibles
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

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`;
