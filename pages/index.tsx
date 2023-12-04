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
          <BasicSection imageUrl="/IMG_5.jpg" title="Vision" overTitle="Empowering Communities Globally with Sustainable Water Solutions">
            Our vision at O&apos;Nadif is to become an essential pillar in solving the global drinking water crisis. We aspire to transform the lives of millions of people living in humanitarian crisis situations and resource-constrained regions, by providing them with reliable and sustainable access to quality drinking water. We envision a world where every individual, regardless of where they live, can benefit from a safe, clean source of water. Through our innovative water filtration technology, we aim to break down the barriers of inaccessibility to drinking water, contributing to the health, stability and prosperity of disadvantaged communities. Our commitment to innovation, sustainability and social impact guides our quest to realize this vision and build a future where access to drinking water is a fundamental right for all.
          </BasicSection>
          <BasicSection imageUrl="/IMG_2.jpg" title="O&apos;Nadif & ODD" overTitle="UN Sustainable Development Goal 6 through Innovative Water Solutions" reversed>
            O&apos;Nadif embodies the vision of the United Nations&apos; Sustainable Development Goal 6, by committing to provide innovative solutions for access to safe drinking water and sanitation. Our mission is to respond to this crucial challenge by offering advanced filtration technology, guaranteeing access to clean water in the world&apos;s most vulnerable regions. By contributing to MDG 6, we are working to ensure equitable and sustainable access to drinking water, supporting the health, well-being and sustainable development of communities. O&apos;Nadif is fully committed to achieving this goal by continually innovating safe and accessible water solutions for all.
          </BasicSection>
          <BasicSection imageUrl="/africa_blem.jpeg" title="Water Crisis in Africa" overTitle="Addressing the Urgent Need for Access to Clean Drinking Water">
            In Africa, some 319 million people, or almost 25% of the population, lack access to basic drinking water sources. Worldwide, 2.2 billion people lack adequate drinking water, and 4.2 billion do not have access to safely managed sanitation facilities. Every year, around 2 million people die from water-related diseases such as diarrhoea, mainly among children under the age of five. The availability of safe drinking water is crucial to the public health, well-being and economic development of communities around the world.
          </BasicSection>
          <BasicSection imageUrl="/chad_crisis.jpeg" title="Chad&apos;s Water Crisis" overTitle="Urgent Need for Improved Access to Safe Drinking Water" reversed>
            In Chad, nearly 51% of the population has no access to basic sources of drinking water. Some 55% of people living in urban areas and 34% in rural areas do not have access to safe drinking water. These challenges of access to drinking water contribute to the prevalence of water-borne diseases such as diarrhea, which is one of the main causes of mortality in children under five. The water situation in Chad remains a major challenge for public health and the general well-being of the population.
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
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
