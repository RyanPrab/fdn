import styled from "styled-components";
import Link from 'next/link';

const MenuContainer = styled.div.attrs(() => ({
  className: `flex flex-row md:justify-center overflow-x-auto items-center bg-white border-b border-gray-200`
}))``;

const MenuItem = styled.a.attrs(() => ({
  className: `flex justify-center items-center text-black font-semibold px-4 h-10 text-xs md:text-sm hover:bg-gray-100`
}))``;

export default function Menu(props) {
  const menus = [
    'Skincare',
    'Make Up',
    'Body',
    'Hair',
    'Fragrance',
    'Nails',
    'Tools',
    'Brands'
  ];

  return (
    <MenuContainer>
      {
        menus.map((item, index) => {
          return (
            <Link href="#" key={index} passHref={true}>
              <MenuItem>
                {item.toUpperCase()}
              </MenuItem>
            </Link>
          )
        })
      }
    </MenuContainer>
  )
}
