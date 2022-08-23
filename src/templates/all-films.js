import React from 'react';

export default ({ pageContext: { allFilms } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <ul>
      {allFilms.map(film => (
        <li>{film.title}</li>
      ))}
    </ul>
  </div>
);