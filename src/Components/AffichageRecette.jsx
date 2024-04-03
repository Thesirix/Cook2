import  { useState } from 'react';
import recettes from "../assets/data/recettes.json";

const AffichageRecette = () => {
  const [recettesState, setRecettesState] = useState(recettes);

  return (
    <div>
      {recettesState.map((recette) => (
        <div key={recette.id}>
          <h2>{recette.title}</h2>
          <img src={recette.imageUrl} alt={recette.title} />
          <p>{recette.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AffichageRecette;
