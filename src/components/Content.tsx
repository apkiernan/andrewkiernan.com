import React from 'react';
import Markdown from 'react-markdown';

import { CodeBlock } from './CodeBlock';

type ContentProps = {
  content: string;
};

export const Content = ({ content }: ContentProps) => (
  <Markdown source={content} renderers={{ code: CodeBlock }} />
);
