import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import recipesData from '../data/recipes.json';

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === parseInt(id));

  return <RecipeDetail recipe={recipe} />;
};

export default RecipePage; 