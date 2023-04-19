import React from "react";
import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";
import { IRecipe } from "../../types/recipe.types";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();
  console.log(favorites);

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} width="100" alt="" />
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? "Remove from " : "add to "} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
