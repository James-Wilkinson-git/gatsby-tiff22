import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ pageContext: { allFilms } }) => (
  <Layout>
    <ul>
      {allFilms.map(film => (
        <li>{film.title}</li>
      ))}
    </ul>
  </Layout>
);

export const Head = () => <Seo title="#tiff22 films" />