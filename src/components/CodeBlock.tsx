import React from 'react';
import Lowlight from 'react-lowlight';
import ts from 'highlight.js/lib/languages/typescript';

type Props = {
  value: string;
  language: string;
};

Lowlight.registerLanguage('ts', ts);
Lowlight.registerLanguage('typescript', ts);

export const CodeBlock = (props: Props) => (
  <Lowlight language={props.language || 'ts'} value={props.value} />
);
