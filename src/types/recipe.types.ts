export interface IRecipe {
  id: number;
  name: string;
  image: string;
}

//создаем нвоый интерфейс, на основе старого, убтираем поле айди при создании
export interface IRecipeData extends Omit<IRecipe, "id"> {}
