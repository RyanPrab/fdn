import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';

const InputContainer = styled.div.attrs(() => ({
  className: `flex flex-row space-x-2 rounded-md border bg-whire items-center justify-self-stretch flex-grow text-gray-600`
}))``;

const SearchButton = styled.button.attrs(() => ({
  className: `flex flex-row items-center h-full cursor-pointer justify-center pl-4`,
  type: 'button'
}))``;

const SearchInput = styled.input.attrs((props) => ({
  className: `bg-white rounded-lg text-xs xl:text-sm pr-3 xl:pr-6 py-4 focus:outline-none w-full shadow-sm`,
  placeholder: `${props.placeholder ? (`${props.placeholder}`) : ('Search')}`
}))``;

export default function Cari(props) {
  const { placeholder } = props;

  return (
    <InputContainer>
      <SearchButton>
        <AiOutlineSearch className="w-6 h-6"/>
      </SearchButton>
      <SearchInput
        placeholder={placeholder}>
      </SearchInput>
    </InputContainer>
  )
}
