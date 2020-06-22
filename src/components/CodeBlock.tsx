import React from 'react';
import Lowlight from 'react-lowlight';
import ts from 'highlight.js/lib/languages/typescript';
import js from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';

type Props = {
  value: string;
  language: string;
};

Lowlight.registerLanguage('ts', ts);
Lowlight.registerLanguage('typescript', ts);
Lowlight.registerLanguage('javascript', js);
Lowlight.registerLanguage('js', js);
Lowlight.registerLanguage('bash', bash);

export const CodeBlock = (props: Props) => (
  <Lowlight language={props.language || 'ts'} value={props.value} />
);
