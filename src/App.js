import { marked } from 'marked';
import { useState } from 'react';
import './App.css';
import Split from 'react-split'
function App() {
  const [editorText,setEditorText] = 
    useState(`This is paragraph
# This is heading  
## This is heading 2
 > Block Quotes!
This a inline \`<div></div>\`
\`\`\`
  let x=1;
  let y=2;
  let z=x+y;
\`\`\`
  **bold**
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
[Link](https://youtube.com)
- list item 1
- list item 2
- list item 3
`);
  const markdown = marked(editorText, {breaks:true});
  return (
    <>
    <h1>Markdown Previewer</h1>
    <div className="d-flex">
      <Split 
      sizes={[50, 50]}
      direction="horizontal"
      cursor="col-resize"
      >
      
        <div className="editorWrap">
          <div className="toolbar">
            Editor
          </div>
          <textarea id="editor" type="text" value={editorText} onChange={e => setEditorText(e.target.value)} />
        </div>
      
      
      <div className="previewWrap">
          <div className="toolbar">Previewer</div>
            <div id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
            </div>
        </div>
      
      </Split>
    </div>
    </>
  );
}

export default App;
