import React, { FC } from 'react';
import styled from '@emotion/styled';
import MarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/stackoverflow-dark.min.css';

interface ContentProps {
  post: string;
};

const Content: FC<ContentProps> = ({
  post,
}) => {
  return (
    <Article>
      <MarkDown
        children={post}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        remarkPlugins={[remarkGfm]} />
    </Article>
  );
};

export default Content;

const Article = styled.article`
  width: 700px;
  min-height: 100vh;
  padding-bottom: 10vh;

  h1 {
    font-size: 48px;
    margin-top: 50px;
  }

  h2 {
    font-size: 36px;
    margin-top: 50px;
  }

  p {
    font-size: 20px;
    line-height: 2em;
  }

  pre {
    margin: 50px 0;
  }
  
  hr {
    border: 1px solid #E3E3E3;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;