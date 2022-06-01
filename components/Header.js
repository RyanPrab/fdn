import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import Search from './Search';
import { BiUserCircle } from 'react-icons/bi';

const HeaderContainer = styled.div.attrs(() => ({
  className: `bg-white p-3 mx-auto border-b border-gray-200`
}))``;

const Container = styled.div.attrs(() => ({
  className: `container mx-auto flex flex-row items-center flex-1 flex-shrink-0 w-full space-x-4`
}))``;

const LogoContainer = styled.div.attrs(() => ({
  className: `relative w-20 h-16 lg:w-40 lg:h-10`
}))``;

export const LogoImg = styled.img.attrs(() => ({
  className: 'relative flex object-contain w-full h-full'
}))``;

const ButtonSignUp = styled.button.attrs(() => ({
  className: `flex flex-row text-xs md:text-sm items-center h-full cursor-pointer justify-center p-4 bg-red-700 text-white rounded-md`,
  type: 'button'
}))``;

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <GiHamburgerMenu
          className='w-6 h-6'
        />
        <LogoContainer>
          <picture>
            <source media='(max-width: 959px)' srcSet='/fd_logo.png' />
            <source media='(min-width: 960px)' srcSet='/FD-Logo-Pink.png' />
            {/* <source
              media="(min-width: 650px)"
              srcset="fd_logo.png"
            /> */}
            <LogoImg
              src="/FD-Logo-Pink.png"
              alt="Female Daily Network"
              layout='fill'
            />
          </picture>
        </LogoContainer>
        <Search
          placeholder="Search products, articles, topics, brands, etc"
        />
        <ButtonSignUp>
          <BiUserCircle className='mr-2'/>
          Login
        </ButtonSignUp>
      </Container>
    </HeaderContainer>
  )
}
