import React from 'react';
import TopBar from './topBar/TopBar';
import { marked } from 'marked';

marked.setOptions({
  mangle: false,
  headerIds: false,
  breaks: true,
});

const Preview = ({ text }) => {
  const markdownText = React.useMemo(() => marked(text), [text]);

  return (
    <div className="previewWrap">
      <TopBar divName="Preview" />
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdownText }}></div>
    </div>
  );
};

export default Preview;