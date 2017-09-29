import React from 'react'
import Link from 'gatsby-link'

import cat from '../layouts/assets/images/cat.jpg';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <img src={cat} alt={cat}/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
