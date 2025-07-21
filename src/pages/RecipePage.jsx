import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import SEO from '../components/SEO';
import recipesData from '../data/recipes.json';

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <>
        <SEO 
          title="Recipe Not Found"
          description="The recipe you're looking for doesn't exist."
        />
        <RecipeDetail recipe={null} />
      </>
    );
  }

  return (
    <>
      <SEO 
        title={recipe.title}
        description={recipe.description}
        url={`/recipe/${recipe.id}`}
        image={`/og-recipe-${recipe.id}.png`} // We'll create these images
        type="article"
      />
      <RecipeDetail recipe={recipe} />
    </>
  );
};

export default RecipePage; 