import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import csharp from "react-syntax-highlighter/src/languages/prism/csharp";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("csharp", csharp);

const codeHighlightCache = new Map();

const retrieveCodeFromHighlightCache = (language, content) => {
	const cachedItem = codeHighlightCache.get(content);
	if (cachedItem === undefined) {
		const highlighterProps = {
			language,
			children: content,
			style: darcula,
			wrapLongLines: true
		};
		SyntaxHighlighter(highlighterProps);
		const cachedVar = SyntaxHighlighter(highlighterProps);
		codeHighlightCache.set(content, cachedVar);
		return cachedVar;
	}

	return cachedItem;
};

const Code = ({children, language}) => {
	return (
		<div>
			{retrieveCodeFromHighlightCache(language, children)}
		</div>
	);
};

export default Code;