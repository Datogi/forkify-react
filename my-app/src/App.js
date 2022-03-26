
import { useEffect, useState } from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import ProductList from './components/Layout/ProductList';
import ShoppingList from './components/Layout/ShoppingList';
import ProductSkeleton from './components/Layout/Skeleton/ProductSkeleton';
import useSWR from 'swr';

function App() {

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [shopButton, setShopButton] = useState(false)
  const [bookmarkArr, setBookmarkArr] = useState([])
  const { data, error } = useSWR(`https://forkify-api.herokuapp.com/api/search?q=pizza`, fetchData)

  async function fetchData(url){
    const data = await fetch(url); 
    if(data.status == 200){
      const res = await data.json();
      setRecipes(res.recipes);
      return res.recipes;
    } else{
      setRecipes([])
      return []
    } 
    
  }

  /* useEffect(() => {
    
  },[query]); */

  return (
    <div className="w-5/6 mt-16 mx-auto rounded-t-lg bg-white height">
        <Header changeQuery={setQuery} bookmarkArr={bookmarkArr}/>
        <div className='flex justify-between'>
       {
        data ? <ProductList recipesList={recipes} changeRecipeObj={setRecipe}/>
        :
        <ProductSkeleton/>
       
       }
        <Main recipeObj={recipe} bookmarkArr={bookmarkArr} setBookmarkArr={setBookmarkArr}  changeRecipeObj={setRecipe} button = {setShopButton}/> 
        <ShoppingList button={shopButton} setShopButton={setShopButton} recipeObj={recipe}/>
        </div>
    </div>
  );
}

export default App;
