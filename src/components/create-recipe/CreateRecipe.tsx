import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";
import { IRecipeData } from "../../types/recipe.types";

const CreateRecipe = () => {
  const defaultValue: IRecipeData = { name: "", image: "" };
  const [recipe, setRecipe] = useState(defaultValue);

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createRecipe(recipe).then(() => setRecipe(defaultValue));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            placeholder="name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <button type="submit">add recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
