import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

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

const BrandWrapper = styled.div.attrs(() => ({
  className: `flex flex-nowrap overflow-x-auto space-x-10 lg:justify-between w-full items-center`
}))``;

const ImageWrapper = styled.div.attrs(() => ({
  className: `relative`
}))``;

export default function BrandSection(props) {
  const { data } = props;
  return (
    <Section>
      <Title>
        Top Brands
      </Title>
      <SubTitleWrapper>
        <SubTitle>
          We all know and love
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
      <BrandWrapper>
        {
          data?.map((item, index) => {
            return (
              <ImageWrapper key={index}>
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={item?.width}
                  height={item?.height}
                />
              </ImageWrapper>
            )
          })
        }
      </BrandWrapper>
    </Section>
  )
}
