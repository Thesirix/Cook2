import React, { useState, useEffect } from 'react';

const RecipeImage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
    
        const response = await fetch('src/assets/data/recettes.json');
        const data = await response.json();
        setRecipes(data);
      } 
       

    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.map(recipe => (
        <img key={recipe.id} src={recipe.imageUrl} alt={recipe.title} />
      ))}
    </div>
  );
};

export default RecipeImage;
