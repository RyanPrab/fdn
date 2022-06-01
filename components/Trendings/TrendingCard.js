import styled from 'styled-components';
import Image from 'next/image';
import React from "react";
import ReactStars from "react-rating-stars-component";
import Link from 'next/link';

const Section = styled.a.attrs(() => ({
  className: `flex flex-col space-y-4`
}))``;

const ImageWrapper = styled.div.attrs(() => ({
  className: `relative w-40 h-52`
})) ``;

const RatingWrapper = styled.div.attrs(() => ({
  className: `flex flex-row space-x-4 items-center`
}))``;

const MainText = styled.div.attrs(() => ({
  className: `text-black text-sm font-semibold`
}))``;

const Description = styled.div.attrs(() => ({
  className: `text-black text-sm`
}))``;

const Type = styled.div.attrs(() => ({
  className: `text-gray-500 text-sm`
}))``;

export default function TrendingCard(props) {
  const { data } = props;

  return (
    <Link href="#" passHref={true}>
      <Section>
        <ImageWrapper>
          <Image
            src={data?.image}
            alt={data?.name}
            layout="fill"
          />
        </ImageWrapper>
        <RatingWrapper>
          <MainText>
            {data?.rating}
          </MainText>
          <ReactStars
            count={5}
            size={20}
            value={Math.floor(data?.rating)}
            activeColor="#B9261C"
            edit={false}
          />
          <MainText>
            {`(${data?.totalReviewer})`}
          </MainText>
        </RatingWrapper>
        <MainText>
          {data?.name}
        </MainText>
        <Description>
          {data?.description}
        </Description>
        <Type>
          {data?.type}
        </Type>
      </Section>
    </Link>
  )
}
