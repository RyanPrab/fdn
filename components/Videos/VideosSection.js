import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Breakpoint } from '../../helpers';

const { mediaQuery } = Breakpoint;

const Section = styled.div.attrs(() => ({
  className: `flex flex-col w-full space-y-4 py-4`
}))``;

const Title = styled.div.attrs(() => ({
  className: `text-black font-semibold text-lg`
}))``;

const SubTitleWrapper = styled.div.attrs(() => ({
  className: `flex flex-row justify-between w-full space-x-2 text-xs md:text-sm`
}))``;

const SubTitle = styled.div.attrs(() => ({
  className: `text-gray-500`
}))``;

const MoreLink = styled.a.attrs(() => ({
  className: `text-red-600 flex flex-row space-x-2 md:space-x-4 items-center`
}))``;

const VideosWrapper = styled.div.attrs(() => ({
  className: `flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4 lg:justify-center items-center`
}))``;

const MainVideo = styled.div.attrs(() => ({
  className: `relative`
}))`
  width: 850px;
  height: 450px;
  @media only screen and ${mediaQuery['3xl']} {
    height: 450px;
    width: 850px;
  }
  @media only screen and ${mediaQuery['2xl']} {
    height: 450px;
    width: 850px;
  }
  @media only screen and ${mediaQuery.xl} {
    height: 400px;
    width: 850px;
  }
  @media only screen and ${mediaQuery.lg} {
    height: 350px;
    width: 100%;
  }
  @media only screen and ${mediaQuery.md} {
    height: 300px;
    width: 100%;
  }
  @media only screen and ${mediaQuery.sm} {
    height: 260px;
    width: 100%;
  }
  @media only screen and ${mediaQuery.xs} {
    height: 200px;
    width: 100%;
  }
`;

const FeatureVideoWrapper = styled.div.attrs(() => ({
  className: `flex flex-row lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0 w-full lg:w-auto`
}))``

const FeatureVideo = styled.div.attrs(() => ({
  className: `relative`
}))`
  width: 400px;
  height: 215px;

  @media only screen and ${mediaQuery.lg} {
    height: 260px;
    width: 400px;
  }
  @media only screen and ${mediaQuery.md} {
    height: 200px;
    width: 400px;
  }
  @media only screen and ${mediaQuery.sm} {
    height: 260px;
  }
  @media only screen and ${mediaQuery.xs} {
    height: 120px;
  }
`;

export default function ArticleSection(props) {
  const { data } = props;
  return (
    <Section>
      <Title>
        Latest Videos
      </Title>
      <SubTitleWrapper>
        <SubTitle>
          Watch and learn, ladies
        </SubTitle>
        <Link href="#" passHref={true}>
          <MoreLink>
            <div>
              See More
            </div>
            <div>
              {`>`}
            </div>
          </MoreLink>
        </Link>
      </SubTitleWrapper>
      <VideosWrapper>
        <MainVideo>
          <Image
            src="/video1.png"
            alt="Main Video"
            layout="fill"
          />
        </MainVideo>
        <FeatureVideoWrapper>
          <FeatureVideo>
            <Image
              src="/video2.png"
              alt="Feature Video"
              layout="fill"
            />
          </FeatureVideo>
          <FeatureVideo>
            <Image
              src="/video3.png"
              alt="Feature Video"
              layout="fill"
            />
          </FeatureVideo>
        </FeatureVideoWrapper>
      </VideosWrapper>
    </Section>
  )
}
