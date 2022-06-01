import styled from 'styled-components';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiMessageDetail } from 'react-icons/bi';

const Section = styled.div.attrs(() => ({
  className: `flex flex-col space-y-4 items-center rounded-md shadow-md border border-gray-300 p-4`
}))``;

const ImageWrapper = styled.div.attrs(() => ({
  className: `relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56`
}))``;

const Title = styled.div.attrs(() => ({
  className: `text-black font-semibold`
}))``;

const ActionWrapper = styled.div.attrs(() => ({
  className: `flex flex-row justify-between px-6 w-full`
}))``;

const Description = styled.div.attrs(() => ({
  className: `text-black text-sm`
}))``;

export default function GroupCard(props) {
  const { data } = props;
  return (
    <Section>
      <ImageWrapper>
        <Image
          className='rounded-full'
          src={data?.image}
          alt={data?.name}
          layout='fill'
        />
      </ImageWrapper>
      <Title>
        {data?.title}
      </Title>
      <ActionWrapper>
        <FaUser/>
        <GiHamburgerMenu/>
        <BiMessageDetail/>
      </ActionWrapper>
      <Description>
        {data?.description}
      </Description>
    </Section>
  )
}
