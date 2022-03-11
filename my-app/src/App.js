
import { useEffect, useState } from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import ProductList from './components/Layout/ProductList';
import ShoppingList from './components/Layout/ShoppingList';


function App() {

  const [query, setQuery] = useState('pizza');
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchData(){
      const data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`); 
      if(data.status == 200){
        const res = await data.json();
        setRecipes(res.recipes);
      } else{
        setRecipes([])
      }
    }

   fetchData()
  },[query]);

  return (
    <div className="w-5/6 mt-16 mx-auto rounded-t-lg bg-white ">
        <Header changeQuery={setQuery}/>
        <div className='flex justify-between'>
        <ProductList recipesList={recipes} changeRecipeObj={setRecipe}/>
        <Main recipeObj={recipe} changeRecipeObj={setRecipe}/> 
        <ShoppingList/>
        </div>
    </div>
  );
}

export default App;
