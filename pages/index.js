import React ,{ useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from "../components/Layout"
import styled from "styled-components";
import EditorSection from '../components/EditorSection/EditorSection';
import Image from 'next/image';
import { Breakpoint } from '../helpers';
import ArticleSection from '../components/Articles/ArticleSection';
import ReviewSection from '../components/Reviews/ReviewSection';
import GroupSection from '../components/Groups/GroupSection';
import Videos from '../components/Videos/VideosSection';
import BrandSection from '../components/Brands/BrandSection';
import FooterSection from '../components/Footer/FooterSection';
import TrendingSection from '../components/Trendings/TrendingSection';

const { mediaQuery } = Breakpoint;

const Container = styled.div.attrs(() => ({
  className: `container mx-auto flex flex-col space-y-4 items-center`
}))``;

const TopFrame = styled.div.attrs(() => ({
  className: `flex justify-center items-center w-full text-gray-700 border border-black bg-gray-300`
}))`
  max-width: 970px;
  height: 50px;
`;

const Billboard = styled.div.attrs(() => ({
  className: `flex justify-center items-center w-full text-gray-700 border border-black bg-gray-300`
}))`
  max-width: 970px;
  height: 250px;
`;

const MidBanner = styled.div.attrs(() => ({
  className: `flex justify-center items-center w-full text-gray-700 border border-black bg-gray-300`
}))`
  max-width: 300px;
  height: 250px;
`;

const BannerContainer = styled.div.attrs(() => ({
  className: `relative w-full`
}))`
  height: 450px;
  @media only screen and ${mediaQuery['3xl']} {
    height: 380px;
  }
  @media only screen and ${mediaQuery['2xl']} {
    height: 350px;
  }
  @media only screen and ${mediaQuery.xl} {
    height: 300px;
  }
  @media only screen and ${mediaQuery.lg} {
    height: 260px;
  }
  @media only screen and ${mediaQuery.md} {
    height: 260px;
  }
  @media only screen and ${mediaQuery.sm} {
    height: 150px;
  }
  @media only screen and ${mediaQuery.xs} {
    height: 150px;
  }
`;

const SeoTitle = styled.h1.attrs(() => ({
  className: `text-black font-semibold`
}))``;

const SeoParagraph = styled.h2.attrs(() => ({
  className: `text-black whitespace-pre-line`
}))``;

const Divider = styled.hr.attrs(() => ({
  className: `border-t border-gray-300 h-2 w-full`
}))``;

export default function Home(props) {
  const { data } = props;

  const editorChoice = data["editor's choice"];
  const latestArticle = data["latest articles"];
  const latestReview = data["latest review"];

  const [groups, setGroups] = useState(null);
  const [brands, setBrands] = useState(null);
  const [trending, setTrending] = useState(null);

  const fetchGroups = async () => {
    const response = await fetch(`/api/popular-groups`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    setGroups(data);
  };

  const fetchBrands = async () => {
    const response = await fetch(`/api/top-brands`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    setBrands(data);
  };

  const fetchTrending = async () => {
    const response = await fetch(`/api/trending`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    setTrending(data);
  };

  useEffect(() => {
   fetchGroups();
   fetchBrands();
   fetchTrending();
  }, [data]);

  return (
    <Layout>
      <div>
        <Head>
          <title>Female Daily Network</title>
          <meta name="description" content="Female Daily Network" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col items-center py-4 space-y-4 flex-1 flex-shrink-0 bg-white w-full">
          <Container>
            <TopFrame>
              Top Frame 970x50
            </TopFrame>
            <Billboard>
              Billboard 970x250
            </Billboard>
            <EditorSection
              data={editorChoice}
            />
          </Container>
          <BannerContainer>
            <Image
              src="/main_banner_r1.png"
              alt="Main Banner"
              layout="fill"
            />
          </BannerContainer>
          <Container>
            <Billboard className='whitespace-pre-line text-center'>
              {`Horizontal 970x250
              (Internal Campaign Only)
              `}
            </Billboard>
            <ArticleSection
              data={latestArticle}
            />
            <div className='flex flex-row justify-between space-x-2 items-center w-full'>
              <ReviewSection
                data={latestReview}
              />
              <MidBanner className='whitespace-pre-line text-center'>
                {`MR 2
                300x250
                `}
              </MidBanner>
            </div>
            <GroupSection
              data={groups?.items}
            />
            <Videos/>
            <TrendingSection
              data={trending?.items}
            />
            <BrandSection
              data={brands?.items}
            />
            <div className='flex flex-col w-full'>
              <SeoTitle>
                Female Daily - Find everything you want to know about beauty on Female Daily
              </SeoTitle>
              <SeoParagraph>
                {`Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!`}
              </SeoParagraph>
            </div>
            <Divider/>
            <FooterSection/>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } }
}

