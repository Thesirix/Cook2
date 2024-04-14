import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const AffichageRecette = ({ recette }) => {
  return (
    <div>
      {recette.map((recette) => (
        <Post key={recette.id} recette={recette} />
      ))}
    </div>
  );
};



export default AffichageRecette;
