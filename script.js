document.addEventListener('DOMContentLoaded', function() {
  const mealTypeSelect = document.getElementById('meal-type');
  const recipesList = document.getElementById('recipes-list');

  const recipes = {
    breakfast: ['Kaya Toast', 'Nasi Lemak', 'Chwee Kueh'],
    lunch: ['Chicken Rice', 'Laksa', 'Char Kway Teow'],
    dinner: ['Hainanese Chicken Rice', 'Satay', 'Chilli Crab'],
    dessert: ['Kueh Lapis', 'Ondeh-Ondeh', 'Chendol'],
    'one-dish': ['Claypot Rice', 'Nasi Goreng', 'Pasta'],
  };

  mealTypeSelect.addEventListener('change', function() {
    const selectedMeal = mealTypeSelect.value;
    const mealRecipes = recipes[selectedMeal] || [];
    displayRecipes(mealRecipes);
  });

  function displayRecipes(mealRecipes) {
    recipesList.innerHTML = '';
    if (mealRecipes.length > 0) {
      const ul = document.createElement('ul');
      mealRecipes.forEach(function(recipe) {
        const li = document.createElement('li');
        li.textContent = recipe;
        ul.appendChild(li);
      });
      recipesList.appendChild(ul);
    } else {
      recipesList.textContent = 'No recipes available for this meal type.';
    }
  }

  // Initialize with default meal type
  mealTypeSelect.dispatchEvent(new Event('change'));
});