// components/Section.jsx
import React from 'react';

function Section({ title, children }) {
  return (
    <div className="section">
      {title && <h2>{title}</h2>}
      <p>{children}</p>
    </div>
  );
}

export default Section;