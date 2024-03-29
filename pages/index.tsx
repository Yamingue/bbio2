import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styled from "styled-components";
import BasicSection from "components/BasicSection";
import { EnvVars } from "env";
import { getAllPosts } from "utils/postsFetcher";
import Cta from "views/HomePage/Cta";
import Features from "views/HomePage/Features";
import Hero from "views/HomePage/Hero";
import Partners from "views/HomePage/Partners";

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/home/objectifs.jpg" title="Nos objectifs" overTitle="Soutenir les agriculteurs en leur fournissant des semences de qualité">
            L&apos;objectif général de notre startup spécialisé dans la production et multiplication de semences est de fournir des semences de qualité supérieure aux agriculteurs locaux, afin d&apos;améliorer leur rendement et leur rentabilité.
          </BasicSection>
          <BasicSection objectFit="contain" imageUrl="/home/3573497.jpg" title="Pourquoi B-Bio ?" overTitle="Potentiel agricole sous-exploité au tchad" reversed>
            La zone méridionale du Tchad dispose d&apos;énormes atouts tant climatiques que pédologiques
            pour assurer l&apos;autosuffisance alimentaire. Mais beaucoup de difficultés entravent l&apos;émergence
            d&apos;une agriculture autosuffisante et la population agricole est exposée à l&apos;insécurité alimentaire.
            Malgré ce potentiel agricole, la production du riz, d&apos;arachide qui entrent dans aliments de base
            de la population reste déficitaire à cause du manque des techniques culturales modernes, des
            semences de bonnes qualités adaptées au changement climatique alors que la demande va
            croissante.
          </BasicSection>
          <BasicSection imageUrl="/home/Wavy_Bus-18_Single-11.jpg" title="Notre vision" overTitle="Semences qualité, agriculture durable, 100% bio">
            La vision de la startup Ferme B-Bio Production est de fournir des semences de
            qualité supérieure aux agriculteurs locaux, afin d&apos;améliorer leur rendement et leur rentabilité.
            Nous faisons également la promotion des pratiques agricoles durables pour minimiser l&apos;impact
            sur l&apos;environnement en produisant 100% Bio sans apport des engrais et des pesticides
            chimiques.
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
          {/* <Trusted /> */}
          <Features />
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
