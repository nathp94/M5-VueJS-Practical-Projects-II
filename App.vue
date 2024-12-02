<template>
  <div id="app">
    <h1>Recipe Search App</h1>
    <div>
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search for recipes..."
      />
      <button @click="fetchRecipes">Search</button>
    </div>
    <div v-if="recipes.length">
      <h2>Search Results:</h2>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <h3>{{ recipe.title }}</h3>
          <p v-html="recipe.summary"></p>
        </li>
      </ul>
    </div>
    <p v-else>No results found.</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { searchRecipes } from './api';

export default {
  name: 'App',
  setup() {
    const searchQuery = ref('');
    const recipes = ref([]);

    const fetchRecipes = async () => {
      try {
        recipes.value = await searchRecipes(searchQuery.value);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    return {
      searchQuery,
      recipes,
      fetchRecipes,
    };
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 2rem;
}
input {
  margin-right: 1rem;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
