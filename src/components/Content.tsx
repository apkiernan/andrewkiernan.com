import React from 'react';

type ContentProps = {
  content: string;
};
export const HTMLContent = ({ content }: ContentProps) => <div dangerouslySetInnerHTML={{ __html: content }} />;

const Content = ({ content }: ContentProps) => <div>{content}</div>;

export default Content;
