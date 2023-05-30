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

