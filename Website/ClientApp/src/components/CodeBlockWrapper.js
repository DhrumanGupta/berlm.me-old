import React from 'react';
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import cs from 'react-syntax-highlighter/dist/esm/languages/prism/csharp';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage(SyntaxHighlighter.supportedLanguages, js);
SyntaxHighlighter.registerLanguage('csharp', cs);

export default function CodeBlockWrapper() {
	return (
		<SyntaxHighlighter language={cs} style={darcula}>
			{
`int main()
{
	// over here, we do extremely dumb yet simple calculations :)
	return 0;
}`
			}
		</SyntaxHighlighter>
	);
}