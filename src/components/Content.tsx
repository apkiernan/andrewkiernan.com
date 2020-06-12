import React from 'react';
import Markdown from 'react-markdown';

type ContentProps = {
  content: string;
};

export const HTMLContent = ({ content }: ContentProps) => <Markdown source={content} />;
