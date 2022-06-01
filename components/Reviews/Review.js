import styled from 'styled-components';
import Image from 'next/image';
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Section = styled.div.attrs(() => ({
  className: `flex flex-col`
}))``

const ReviewWrapper = styled.div.attrs(() => ({
  className: `flex flex-col px-2 py-6 border border-gray-500 rounded-md space-y-2`
}))``;

const ProductWrapper = styled.div.attrs(() => ({
  className: `flex flex-row space-x-1 w-full justify-center`
}))``;

const ProductImage = styled.div.attrs(() => ({
  className: `relative w-40 h-40`
}))``;

const ProductInfo = styled.div.attrs(() => ({
  className: `flex flex-col space-y-2`
}))``;

const ProductName = styled.div.attrs(() => ({
  className: `text-black text-sm font-semibold`
}))``;

const ProductDescription = styled.div.attrs(() => ({
  className: `text-black text-sm`
}))``;

const Divider = styled.hr.attrs(() => ({
  className: `border-t border-gray-300 `
}))``;

const Comment = styled.div.attrs((props) => ({
  className: `text-xs text-gray-500 ${!props.isReadMore ? ('line-clamp-2') : ('line-clamp-none')} `
}))``;

const UserWrapper = styled.div.attrs(() => ({
  className: `flex flex-col space-y-2 items-center -mt-5`
}))``;

const UserImage = styled.div.attrs(() => ({
  className: `relative w-20 h-20`
}))``;

const UserName = styled.div.attrs(() => ({
  className: `text-sm text-gray-500`
}))``;

const Profile = styled.div.attrs(() => ({
  className: `text-xs text-gray-400`
}))``;

export default function Review(props) {
  const { data } = props;

  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <Section>
      <ReviewWrapper>
        <ProductWrapper>
          <ProductImage>
            <Image
              src={data?.product?.image}
              alt={data?.product?.name}
              layout="fill"
            />
          </ProductImage>
          <ProductInfo>
            <ProductName>
              {data?.product?.name}
            </ProductName>
            <ProductDescription>
              {data?.product?.desc}
            </ProductDescription>
          </ProductInfo>
        </ProductWrapper>
        <Divider/>
          <ReactStars
            count={5}
            size={20}
            value={Math.floor(data?.star)}
            activeColor="#B9261C"
            edit={false}
          />
        <div>
          <Comment
            isReadMore={isShowMore}
          >
            {data?.comment}
          </Comment>
          <span className='text-red-500 cursor-pointer text-xs'
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? ('Read Less') : ('Read More')}
          </span>
        </div>
      </ReviewWrapper>
      <UserWrapper>
        <UserImage>
          <Image
            className='rounded-full'
            src="/user_profile1.png"
            alt={`${data?.user}'s comment`}
            layout="fill"
          />
        </UserImage>
        <UserName>
          {data?.user}
        </UserName>
        <Profile>
          {data?.profile?.join(", ")}
        </Profile>
      </UserWrapper>
    </Section>
  );
};
