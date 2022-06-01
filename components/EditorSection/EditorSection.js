import styled from 'styled-components';
import EditorCard from './EditorCard';

const Section = styled.div.attrs(() => ({
  className: `flex flex-col w-full space-y-4 py-4`
}))``;

const Title = styled.div.attrs(() => ({
  className: `text-black font-semibold text-lg`
}))``;

const SubTitle = styled.div.attrs(() => ({
  className: `text-gray-500`
}))``;

const CardWrapper = styled.div.attrs(() => ({
  className: `flex flex-nowrap overflow-x-auto space-x-10 lg:justify-between w-full`
}))``;

export default function EditorSection(props) {
  const { data } = props;
  return (
    <Section>
      <Title>
        {`Editor's Choice`}
      </Title>
      <SubTitle>
        Curated with love
      </SubTitle>
      <CardWrapper>
        {
          data.map((item, index) => {
            return (
              <EditorCard
                key={index}
                data={item}
              />
            )
          })
        }
      </CardWrapper>
    </Section>
  )
}
