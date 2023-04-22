import  { useState } from 'react';
import recettes from "../assets/data/recettes.json";

const AffichageRecette = () => {
  const [recettesState, setRecettesState] = useState(recettes);

  return (
