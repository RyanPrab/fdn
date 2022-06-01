import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'

const Section = styled.div.attrs(() => ({
  className: `flex flex-col space-y-4 w-full`
}))``;

const Row = styled.div.attrs(() => ({
  className: `flex flex-row space-x-4 w-full justfiy-around`
}))``;

const ArticleSection = styled.div.attrs(() => ({
  className: `grid grid-cols-2 lg:grid-cols-3 gap-4 w-5/6`
}))``;

const Article = styled.a.attrs(() => ({
  className: `text-black text-xs md:text-sm font-semibold`
}))``;

const MobileAppSection = styled.div.attrs(() => ({
  className: `flex flex-col space-y-2 w-1/2 `
}))``;

const TitleMobile = styled.div.attrs(() => ({
  className: `text-black text-xs md:text-sm font-semibold`
}))``;

const AppSection = styled.div.attrs(() => ({
  className: `flex flex-row space-x-4`
}))``;

const ImageAppWrapper = styled.div.attrs(() => ({
  className: `relative w-20 h-8 lg:w-48 lg:h-16`
}))``;

const CopyrightSection = styled.div.attrs(() => ({
  className: `flex flex-col space-y-2 w-5/6`
}))``;

const LogoContainer = styled.div.attrs(() => ({
  className: `relative w-40 h-10`
}))``;

const Copyright = styled.div.attrs(() => ({
  className: `text-sm text-gray-500`
}))``;

const SocialMediaWrapper = styled.div.attrs(() => ({
  className: `flex flex-row space-x-6 w-1/2`
}))``;

export default function FooterSection(props) {
  return (
    <Section>
      <Row>
        <ArticleSection>
          <Link href="#" passHref={true}>
            <Article>
              About Us
            </Article>
          </Link>
          <Link href="#" passHref={true}>
            <Article>
              {`Term & Condition`}
            </Article>
          </Link>
          <Link href="#" passHref={true}>
            <Article>
              Awards
            </Article>
          </Link>
          <Link href="#" passHref={true}>
            <Article>
              Feedback
            </Article>
          </Link>
          <Link href="#" passHref={true}>
            <Article>
              Privacy Policy
            </Article>
          </Link>
          <Link href="#" passHref={true}>
            <Article>
              Newsletter
            </Article>
          </Link>
          <Link href="#" passHref={true}>
            <Article>
              Contact
            </Article>
          </Link>
          <Link href="#" passHref={true}>
            <Article>
              Help
            </Article>
          </Link>
        </ArticleSection>
        <MobileAppSection>
          <TitleMobile>
            Download Our Mobile App
          </TitleMobile>
          <AppSection>
            <ImageAppWrapper>
              <Image
                src="/app_store.png"
                alt="App Store"
                layout="fill"
              />
            </ImageAppWrapper>

            <ImageAppWrapper>
              <Image
                src="/play_store.png"
                alt="Play Store"
                layout="fill"
              />
            </ImageAppWrapper>
          </AppSection>
        </MobileAppSection>
      </Row>
      <Row className='items-center'>
        <CopyrightSection>
          <LogoContainer>
            <Image
              src="/FD-Logo-Pink.png"
              alt="Female Daily Network"
              layout='fill'
            />
          </LogoContainer>
          <Copyright>
            Copyright &copy; 2015-2017 Female Daily Network - All rights reserved
          </Copyright>
        </CopyrightSection>
        <SocialMediaWrapper>
          <BsFacebook className='w-6 h-6 lg:w-8 lg:h-8 text-blue-800'/>
          <BsTwitter className='w-6 h-6 lg:w-8 lg:h-8 text-blue-500'/>
          <BsInstagram className='w-6 h-6 lg:w-8 lg:h-8 text-pink-700'/>
          <BsYoutube className='w-6 h-6 lg:w-8 lg:h-8 text-red-600'/>
        </SocialMediaWrapper>
      </Row>
    </Section>
  );
};
