import styled from 'styled-components';
import Image from 'next/image';
import React from "react";
import ReactStars from "react-rating-stars-component";

const CardContainer = styled.div.attrs(() => ({
  className: `flex flex-col`
}))`
  width: 200px;
  min-height: 300px;
`;

const EditorWrapper = styled.div.attrs(() => ({
  className: `flex flex-row space-x-2 items-center justify-center`
}))``;

const ProfileWrapper = styled.div.attrs(() => ({
  className: `relative w-20 h-20 rounded-full`
}))``;

const EditorInfo = styled.div.attrs(() => ({
  className: `flex flex-col space-y-2`
}))``;

const EditorName = styled.div.attrs(() => ({
  className: `text-black font-semibold text-sm`
}))``;

const EditorRole = styled.div.attrs(() => ({
  className: `text-gray-400 text-xs`
}))``;

const ProductWrapper = styled.div.attrs(() => ({
  className: `flex flex-col space-y-2 px-2 py-4 border border-gray-300 rounded-md -mt-3`
}))``;

const ProductImage = styled.div.attrs(() => ({
  className: `relative w-36 h-36 py-4`
}))``;

const RatingWrapper = styled.div.attrs(() => ({
  className: `flex flex-row space-x-2 text-sm`
}))``;

const ProductName = styled.div.attrs(() => ({
  className: `text-black font-semibold text-sm`
}))``;

const ProductDescription = styled.div.attrs(() => ({
  className: `text-black leading-normal text-sm`
}))``;

export default function EditorCard(props) {
  const { data } = props
  return (
    <CardContainer>
      <EditorWrapper>
        <ProfileWrapper>
          <Image
            className='rounded-full'
            src="/user_profile1.png"
            alt={`${data?.editor}'s choice`}
            layout="fill"
          />
        </ProfileWrapper>
        <EditorInfo>
          <EditorName>
            {data?.editor}
          </EditorName>
          <EditorRole>
            {data?.role}
          </EditorRole>
        </EditorInfo>
      </EditorWrapper>
      <ProductWrapper>
        <div className='flex justify-center'>
          <ProductImage>
            <Image
              src={data?.product?.image}
              alt={data?.product?.name}
              layout="fill"
            />
          </ProductImage>
        </div>
        <RatingWrapper>
          <div className='font-semibold'>
            {data?.product?.rating}
          </div>
          <ReactStars
            count={5}
            size={20}
            value={Math.floor(data?.product?.rating)}
            activeColor="#B9261C"
            edit={false}
          />
        </RatingWrapper>
        <ProductName>
          {data?.product?.name}
        </ProductName>
        <ProductDescription>
          {data?.product?.description}
        </ProductDescription>
      </ProductWrapper>
    </CardContainer>
  )
}
