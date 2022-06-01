import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.div.attrs(() => ({
  className: `flex flex-col space-y-2 p-2`
}))``;

const ImageWrapper = styled.div.attrs(() => ({
  className: `relative w-68 h-32 md:h-40 lg:h-56`
}))``;

const ArticleName = styled.div.attrs(() => ({
  className: `text-black font-semibold text-md`
}))``;

const AuthorWrapper = styled.div.attrs(() => ({
  className: `flex flex-row items-center space-x-2 text-sm`
}))``;

const Author = styled.div.attrs(() => ({
  className: `text-gray-600 font-semibold`
}))``;

const PublishedAt = styled.div.attrs(() => ({
  className: `text-gray-400`
}))``;

export default function Article(props) {
  const { data } = props;
  return (
    <Section>
      <ImageWrapper>
        <Image
          className='rounded-lg'
          src={data?.image}
          alt={data?.title}
          layout="fill"
        />
      </ImageWrapper>
      <ArticleName>
        {data?.title}
      </ArticleName>
      <AuthorWrapper>
        <Author>
          {data?.author}
        </Author>
        <div className='text-gray-400'>
          {`|`}
        </div>
        <PublishedAt>
          {data?.published_at}
        </PublishedAt>
      </AuthorWrapper>
    </Section>
  )
}
