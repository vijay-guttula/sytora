import React from 'react';

export default function Desktop(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="M62,6c0-2-2-4-4-4H6C4,2,2,4,2,6v38h60V6z" fill="#212528" />
      <path d="M2,44v4c0,2,2,4,4,4h52c2,0,4-2,4-4v-4H2z" fill="#ddd" />
      <path d="m24 54c0 4-4 4-8 4h32c-4 0-8 0-8-4v-2h-16v2" fill="#bfbebe" />
      <path fill="#3e4347" d="m6 6h52v34h-52z" />
      <g fill="#94989b">
        <circle cx={32} cy="47.9" r={1} />
        <path d="m16 58h32v4h-32z" />
      </g>
    </svg>
  );
}
