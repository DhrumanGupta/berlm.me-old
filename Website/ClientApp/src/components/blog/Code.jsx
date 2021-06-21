import React, {useState} from "react";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";

import {atomDark, prism} from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import sass from "react-syntax-highlighter/dist/cjs/languages/prism/sass";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("sass", sass);

const codeHighlightCache = new Map();

const retrieveCodeFromHighlightCache = (language, isDark, content) => {
	const cachedItem = codeHighlightCache.get(content + isDark);
	if (cachedItem === undefined) {
		const highlighterProps = {
			language,
			children: content,
			style: isDark ? atomDark : prism,
		};
		SyntaxHighlighter(highlighterProps);
		const cachedVar = SyntaxHighlighter(highlighterProps);
		codeHighlightCache.set(content + isDark, cachedVar);
		return cachedVar;
	}

	return cachedItem;
};

const Code = ({children, language, isDark}) => {
	return (
		<div>
			{retrieveCodeFromHighlightCache(language, isDark, children)}
		</div>
	);
};

export default Code;