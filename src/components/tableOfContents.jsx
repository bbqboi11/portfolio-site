import React from 'react';
import StickyBox from 'react-sticky-box';

import './tableofContents.scss';

export const TableOfContents = ({ elementName }) => {
  const elements = [...document.getElementsByTagName(elementName)];

  return (
    <StickyBox>
      <ul className="table-of-contents">
        {elements.map((el) => (
          <li key={el.id}><a href={`#${el.id}`}>{el.textContent || el.innerText || 'Unknown'}</a></li>
        ))}
      </ul>
    </StickyBox>
  )
};