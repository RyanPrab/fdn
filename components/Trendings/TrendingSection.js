import styled from 'styled-components';
import TrendingCard from './TrendingCard';
import React from 'react';
import Carousel from 'react-grid-carousel'

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

export default function TrendingSection(props) {
  const { data } = props;
  return (
    <Section>
      <Title>
        Trending This Week
      </Title>
      <SubTitleWrapper>
        <SubTitle>
          See our weekly most reviewed products
        </SubTitle>
      </SubTitleWrapper>
      <Carousel
        cols={6}
        rows={1}
        gap={10}
        loop
      >
        {
          data?.map((item,index) => {
            return (
              <Carousel.Item key={index}>
                <TrendingCard
                  data={item}
                />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </Section>
  )
}
