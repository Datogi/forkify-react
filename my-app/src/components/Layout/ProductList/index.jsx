

export default function ProductList({recipesList, changeRecipeObj}){

    async function fetchData(id){
        const data = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`); 
        if(data.status == 200){
          const res = await data.json();
          changeRecipeObj(res.recipe);
        } else{
          changeRecipeObj({})
        }
    }

    function handlerAnchor(id){
        fetchData(id)
    }

    return(
        <div className="w-1/4 flex flex-col border-r-2 h-screen">
            {
                recipesList.length > 0 ? 
                    recipesList.map(el =>{
                        return(
                            <div key={el.recipe_id} className='px-4 shadow-md pb-1'> 
                                <a onClick={() => handlerAnchor(el.recipe_id)} href={`#${el.recipe_id}`} className='flex items-center ml-2 mt-2 hover:bg-gray-100  '> 
                                    <img className="w-16 h-16 rounded-full " src={el.image_url} alt={el.title} />
                                    <p className="ml-2 text-base italic title" >{el.title}</p>
                                </a>
                            </div>
                        )
                    })
                : 
                <p className="text-lg text-gray-600 mx-auto mt-16">no result</p>
            }
        </div>
    )
}