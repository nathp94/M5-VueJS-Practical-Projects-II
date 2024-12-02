import axios from 'axios';

const API_KEY = 'YOUR_SPOONACULAR_API_KEY';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query,
        number: 10, // Limit to 10 results
        apiKey: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
