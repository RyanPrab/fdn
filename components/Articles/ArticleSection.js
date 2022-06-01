import styled from 'styled-components';
import Link from 'next/link';
import Article from './Article';

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

const MoreLink = styled.a.attrs(() => ({
  className: `text-red-600 flex flex-row space-x-2 md:space-x-4 items-center`
}))``;

const ArticleWrapper = styled.div.attrs(() => ({
  className: `grid grid-cols-2 md:grid-cols-3 gap-4`
}))``;

export default function ArticleSection(props) {
  const { data } = props;
  return (
    <Section>
      <Title>
        Latest Article
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
      <ArticleWrapper>
        {
          data?.map((item, index) => {
            return (
              <Article
                key={index}
                data={item}
              />
            )
          })
        }
      </ArticleWrapper>
    </Section>
  )
}
