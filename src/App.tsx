import React from "react";
import { useState } from "react";
import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-Item/RecipeItem";
import User from "./components/user/User";
import { useGetRecipesQuery } from "./store/api/api";

//? есть ли юзер? условия в хуке
const userId = 2;
const App = () => {
  const [search, setSearch] = useState("");
  const [queryTerm, setQueryTerm] = useState("");
  const { isLoading, data } = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(search);
  };

  return (
    <section>
      <Header />
      <CreateRecipe />
      <div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>search</button>
      </div>
      <User />
      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : data ? (
          data.map((item) => <RecipeItem recipe={item} key={item.id} />)
        ) : (
          <div>not found</div>
        )}
      </div>
    </section>
  );
};

export default App;
