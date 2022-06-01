import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Review from './Review';
import Carousel from 'react-grid-carousel'

const Section = styled.div.attrs(() => ({
  className: `flex flex-col w-2/3 space-y-4 py-4`
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

const ReviewWrapper = styled.div.attrs(() => ({
  className: `flex flex-nowrap overflow-x-auto space-x-10 w-full`
}))``;

export default function ReviewSection(props) {
  const { data } = props;

  return (
    <Section>
      <Title>
        Latest Reviews
      </Title>
      <SubTitleWrapper>
        <SubTitle>
          So you can make better purchase decision
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
      {/* <ReviewWrapper> */}
        <Carousel
          cols={2}
          rows={1}
          gap={10}
          loop
        >
          {
            data?.map((item,index) => {
              return (
                <Carousel.Item key={index}>
                  <Review
                    data={item}
                  />
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      {/* </ReviewWrapper> */}
    </Section>
  )
}
