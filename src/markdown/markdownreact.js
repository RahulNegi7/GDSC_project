import React, { useRef, useState } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import JoditEditor from 'jodit-react';
import './styles.css';

const Markdown = () => {
  const editor = useRef(null)
  const [content,setContent] = useState('')
  const [markDown,setMarkDown] = useState("Welcome");
  return (
    <>
        <header>
          <b>Markdown-Previewer1</b>
        </header>

        <div className="center-div"> 

        <div className='left-side'>
        <b1 className="left-head">Type here</b1>
          <textarea className="left-side" 
          value={markDown} 
          onChange={(e) => setMarkDown(e.target.value)}
          >  
          
          
          <JoditEditor
			    ref={editor}
			    value={content}
			    onChange={newContent => setContent(newContent)}
		      />
          
          </textarea>
          </div>

          <div className="right-side">
          <b2 className="right-head">Preview</b2>
            <ReactMarkdown>{markDown}</ReactMarkdown>
          </div>

        </div>
    </>  
  );
};

export default Markdown;