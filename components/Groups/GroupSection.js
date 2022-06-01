import styled from 'styled-components';
import GroupCard from './GroupCard';
import Link from 'next/link';

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

const CardWrapper = styled.div.attrs(() => ({
  className: `flex flex-nowrap overflow-x-auto space-x-10 lg:justify-between w-full`
}))``;

export default function GroupSection(props) {
  const { data } = props;

  return (
    <Section>
      <Title>
        Popular Groups
      </Title>
      <SubTitleWrapper>
        <SubTitle>
          Where the beauty TALK are
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
      <CardWrapper>
        {
          data?.map((item,index) => {
            return (
              <GroupCard
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
