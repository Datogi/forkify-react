
import { useEffect, useState } from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import ProductList from './components/Layout/ProductList';
import ShoppingList from './components/Layout/ShoppingList';


function App() {

  const [query, setQuery] = useState('pizza');
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function fetchData(){
      const data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`); 
      const res = await data.json();
     setRecipes(res.recipes) ;
    }

   fetchData()
  },[]);

  return (
    <div className="w-4/5 mt-16 mx-auto rounded-t-lg bg-white">
        <Header/>
        <div className='flex justify-between'>
        <ProductList recipesList = {recipes}/>
        <Main/> 
        <ShoppingList/>
        </div>
    </div>
  );
}

export default App;
