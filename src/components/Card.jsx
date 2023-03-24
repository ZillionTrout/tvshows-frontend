import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ show }) {

  return (
    <div className="cardShow">
      <img src={show.image} alt={show.title} />
      <h2>
        <Link to={`/shows/${show._id}`}>{show.title}</Link>
      </h2>
    </div>
  )
}