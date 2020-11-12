let getRecipe = async (event) => {
  try {
    event.preventDefault();

    let userSearch = document.getElementById("user-query").value;

    let recipe = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian${userSearch}`
    );

    recipe = await recipe.json();

    displayRecipe(recipe);
  } catch (e) {
    console.log(e);
    {
    }
  }
};

meals.results.forEach((mealName) => console.log(mealName.strMeal.strMealThumb));

form.addEventListener("submit", getRecipe);
